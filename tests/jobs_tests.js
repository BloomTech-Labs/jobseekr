const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const sinon = require('sinon');
const server = require('./server.js');
const Job = require('../models/jobModel');

const { expect } = chai;

// allows us to make and test HTTP requests
chai.use(chaiHTTP);

const PATH = '/api/jobs';

describe('Jobs Server', () => {
  before(done => {
    mongoose.Promise = global.Promise;
    // Do we need to connect to mlab here or is it best practice
    // to use a different mongodb instance in the testing environment?
    mongoose.connect('mongodb://localhost/test');
    const db = mongoose.connection;
    db.on('error', () => console.error.bind(console, 'connection error'));
  })
})
