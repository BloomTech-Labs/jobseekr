const Job = require('../models/jobModel');

const getAllJobs = (req, res) => {
  const { username } = req.body;
  Job.find({ username })
    .then(jobs => res.json(jobs))
    .catch(err => res.status(500).json({ error: 'Error fetching Jobs' }));
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

const createJob = (req, res) => {
  const job = req.body.job;
  if (job.company && job.position && job.status && job.username) {
    Job.save({ ...job })
      .then(job => res.json(job))
      .catch(err => res.status(500).json({ error: 'Error saving the job' }));
  } else {
    res.status(422).send('Please send valid company, position, status, username');
  }
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
};
