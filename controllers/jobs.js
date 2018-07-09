const Job = require('../models/jobModel');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4');
const mySecret = process.env.SECRET || "random";

const getAllJobs = async (req, res) => {
  const token = req.get('Authorization');
  const storedPayload = await jwt.verify(token, mySecret);
  const email = storedPayload.email;
  User.findOne({ email })
    .then(user => {
      Job.find({ user: user._id })
        .then(jobs => res.json(jobs))
        .catch(err => res.status(500).json({ error: 'Error fetching Jobs', err }));
    })
};

const getList = async (req, res) => {
  console.log("hello");
  const token = req.get('Authorization');
  console.log({token})
  const storedPayload = await jwt.verify(token, mySecret);
  const email = storedPayload.email;
  console.log({email});
  User.findOne({ email })
    .then(user => {
      res.json(user.jobslist);
    })
    .catch(err => console.log(err));
};

const getJob = (req, res) => {
  const { username, _id } = req.body;
  if (username && _id) {
    Job.find({ username, _id })
      .then(job => res.json(job))
      .catch(err => res.status(500).json({ error: 'Error fetching the job' }));
  } else {
    res.status(422).send('Please send valid _id and username');
  }
};

const editJob = (req, res) => {
  const job = req.body;
  const { _id } = job;
  delete job._id;
  if (_id) {
    Job.findOneAndUpdate({ _id }, { ...job })
      .then(job => res.json(job))
      .catch(err => res.status(500).json({ error: 'Error updating the job', err }));
  } else {
    res.status(422).send('Please send valid company, position, status, and token');
  }
}

const createJob = async (req, res) => {
  const job = req.body;
  const { token } = req.body;
  const storedPayload = await jwt.verify(token, mySecret);
  const email = storedPayload.email;
  delete job.token;
  if (job.companyName && job.position && job.status && email) {
    User.find({ email })
      .then(user => {
        job.user = user[0]._id
        const newJob = new Job({...job});
        newJob.save()
          .then(job => res.json(job))
          .catch(err => res.status(500).json({ error: 'Error saving the job', err }));
      })
      .catch(err => res.status(500).json({ error: 'Error finding user', err }));
  } else {
    res.status(422).send('Please send valid company, position, status, and token');
  }
};

const createList = async (req, res) => {
  const { token, title, list } = req.body;
  const storedPayload = await jwt.verify(token, mySecret);
  const newId = uuidv4();
  const email = storedPayload.email;
  if (title) {
    const newList = {
      id: newId,
      status: title,
      jobs: []
    };
    list.push(newList);
    console.log({list});
    User.findOneAndUpdate({ 
      email }, {
        jobslist: list
      }, {
        new: true
      })
      .then(user => {
        res.status(200).json(user.jobslist);
      })
      .catch(err => res.status(500).json({ error: 'Error finding user', err }));
  } else {
    res.status(422).send('Please send valid list title, and token');
  }
};

module.exports = {
  getAllJobs,
  getJob,
  editJob,
  createJob,
  createList,
  getList,
};
