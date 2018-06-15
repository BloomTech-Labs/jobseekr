const Job = require('../models/jobModel');

const getAllJobs = (req, res) => {
  const { user } = req.body;
  Job.find({ user })
    .then(jobs => res.json(jobs))
    .catch(err => res.status(500).json({ error: 'Error fetching Jobs', err }));
};

const getJob = (req, res) => {
  const { user, _id } = req.body;
  if (user && _id) {
    Job.find({ user, _id })
      .then(job => res.json(job))
      .catch((err) => {
        res.status(500).json({ error: 'Error fetching the job', err });
      });
  } else {
    res.status(422).send('Please send valid _id and user');
  }
};

const createJob = (req, res) => {
  const { job } = req.body;
  if (job.company && job.position && job.status && job.user) {
    // linter wanted different var name than job in the .then
    // statement since "jon" was already declared in the outer
    // scope ... thus the change to jobCard two lines down from here.
    Job.save({ ...job })
      .then(jobCard => res.json(jobCard))
      .catch((err) => {
        res.status(500).json({ error: 'Error saving the job', err });
      });
  } else {
    res.status(422).send('Please send valid company, position, status, user');
  }
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
};
