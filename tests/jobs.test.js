const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const jwt = require('jsonwebtoken');
// const sinon = require('sinon');

const Job = require('../models/jobModel');
const User = require('../models/userModel');

const { expect } = chai;

// allows us to make and test HTTP requests
chai.use(chaiHTTP);

const PATH = 'http://localhost:5000';


describe('jobs test', () => {
  
  before(done => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/test');
    const db = mongoose.connection;
    db.on('error', () => console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('we are connected');
      done();
    });
  });
  
  after(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
      console.log('we are disconnected');
    });
  });
  
  let userId;
  let job1;
  let token;
  const secret = "secret";
  beforeEach(async () => {
    const newUser = new User({
      email: 'jobstest@user.test',
      password: 'testuser',
      jobslist: [
        { id: 1, status: 'Want to Apply', jobs: [] },
        { id: 2, status: 'Submitted Job App', jobs: [] },
        { id: 3, status: 'Received Response', jobs: [] },
        { id: 4, status: 'Phone Interview', jobs: [] },
        { id: 5, status: 'On Site Interview', jobs: [] },
        { id: 6, status: 'Technical Interview', jobs: [] },
        { id: 7, status: 'Offer', jobs: [] },
        { id: 8, status: 'Rejected', jobs: [] }
      ]
    });

    await newUser.save().then(user => {
      userId = user._id
      token = jwt.sign({email: user.email}, secret);
      // console.log({ userId, token });
      const newJob = new Job({
        companyName: "Google",
        position: "janitor",
        status: "Want to Apply",
        user: userId,
        token
      });
      newJob.save().then(job => {
        job1 = job
        // console.log({ job1 });
      })
      .catch(err => console.error("error saving job", err));
    })
    .catch(err => console.error("error saving user", err));
    
  });

  afterEach(done => {
    User.remove({}, err => {
      if (err) console.error(err);
    });
    Job.remove({}, err => {
      if (err) console.error(err);
    });
    done();
  });

  
  describe('[GET] /api/jobs', () => {
    it('should return all jobs belonging to a user', (done) => {
      chai.request(PATH)
      .get('/api/jobs', { headers: { "Authorization": token } }) 
      .end((err, res) => {
        console.log("response: ", res);
        if (err) {
          console.error("error getting jobs", err);
          done();
        }
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(1);
        expect(res.body[0].position).to.equal('janitor');
      });
      done();
    });
  });
  
});