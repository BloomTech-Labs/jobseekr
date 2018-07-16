const mongoose = require('mongoose');
const server = require('./server.js');
const {
  getAllJobs,
  getJob,
  editJob,
  createJob,
  createList,
  getList,
  updateStatus,
  deleteJob,
  deleteList,
} = require('../controllers');
const jwt = require('jsonwebtoken');
const mySecret = process.env.SECRET || 'random';
const Job = require('../models/jobModel');
const User = require('../models/userModel');

const PATH = '/api/jobs';

describe('Server set up', () => {
  let token = '';
  let email = '';
  let user_id = '';
  beforeAll(done => {
    mongoose.connect('mongodb://localhost/testJobseekr');
    const db = mongoose.connection;
    db.on('error', () => console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('we are connected');
      const newUser = { 
        email: 'ac@ac.ac', 
        password: 'ac',
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
      };
      newUser.save()
        .then(user => {
          email = user.email;
          user_id = user._id;
          token = await jwt.sign({ email }, mySecret.toString());
        })
        .then(() => done())
        .catch(err => console.log('error saving user in beforeAll', err));
    });
  });

  afterAll(done => {
     mongoose.connection.close();
     if (mongoose.connection.readyState === 0) done();
     else console.error('error closing connection'), done();
     mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done));
  });

  describe('job tests', () => {
     const myJob = new Job({
        companyName: 'Facebook',
        position: 'Jr. Developer',
        status: 'Want to Apply',
        user: user_id,
     });
     test('create a job', (done) => {
       createJob({
         body: { token, ...myJob }
       }, res)
        .then

     })
  });

  // beforeEach(done => {
  //    const myJob = new Job({
  //       companyName: 'Facebook',
  //       position: 'Jr. Developer',
  //       status: 'Want to Apply',
  //       user: 'user_id',
  //    });
  //    myJob
  //       .save()
  //       .then(job => {
  //          testJob = job;
  //          jobId = String(job._id);
  //          done();
  //       })
  //       .catch(err => {
  //          console.error(err);
  //          done();
  //       });
  // });

  // afterEach(done => {
  //    Show.remove({}, err => {
  //       if (err) console.log(err);
  //       done();
  //    });
  // });

});