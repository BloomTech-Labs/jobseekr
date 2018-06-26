const Job = require('../models/jobModel');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const mySecret = process.env.SECRET || "random";

const getAllJobs = async (req, res) => {
  const { token } = req.body;
  const storedPayload = await jwt.verify(token, mySecret);
  const email = storedPayload.email;
  Job.find({ email })
    .then(jobs => res.json(jobs))
    .catch(err => res.status(500).json({ error: 'Error fetching Jobs', err }));
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
  delete job.token;
  const { token } = req.body;
  const storedPayload = await jwt.verify(token, mySecret);
  const email = storedPayload.email;
  if (job.companyName && job.position && job.status && email) {
    User.find({ email })
      .then(user => job.user = user._id)
      .then(() => {
        Job.save({ ...job })
          .then(job => res.json(job))
          .catch(err => res.status(500).json({ error: 'Error saving the job', err }));
      })
      .catch(err => res.status(500).json({ error: 'Error finding user', err }));
  } else {
    res.status(422).send('Please send valid company, position, status, and token');
  }
};

module.exports = {
  getAllJobs,
  getJob,
  editJob,
  createJob,
};
