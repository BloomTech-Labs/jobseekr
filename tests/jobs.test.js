const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const sinon = require('sinon');
const server = require('../server.js');

const Job = require('../models/jobModel');
const User = require('../models/userModel');

const { expect } = chai;

// allows us to make and test HTTP requests
chai.use(chaiHTTP);

const PATH = '/api/jobs';


describe('jobs', () => {
  
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
  beforeEach(async () => {
    const newUser = new User({
      email: 'test@user.test',
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

    const newJob = new Job({
      companyName: "Google",
      position: "janitor",
      status: "Want to Apply",
      user: userId,
    });
    
    await newUser.save().then(user => userId = user.id);
    await newJob.save().then(job => job1 = job);
    
  });

  afterEach(done => {
    User.remove({}, err => {
      if (err) console.error(err);
      done();
    });
  });

});

describe('[GET] /api/jobs', () => {
  it('should return all jobs belonging to a user', (done) => {
    chai.request(server)
    .get('/api/jobs')
    .end((err, res) => {
      if (err) console.error(err);
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(1);
      expect(res.body[0].position).to.equal('janitor');
      done();
    });
  });
});
