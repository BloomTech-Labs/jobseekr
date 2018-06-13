const Job = require('../models/jobModel');

const getAllJobs = (req, res) => {
    const { user } = req.body;
    Job.find({ user })
        .then(jobs => res.json(jobs))
        .catch(err => res.status(500).json({ error: 'Error fetching Jobs' }));
};

const getJob = (req, res) => {
    const { user, _id } = req.body;
    if (user && _id) {
        Job.find({ user, _id })
            .then(job => res.json(job))
            .catch(err =>
                res.status(500).json({ error: 'Error fetching the job' })
            );
    } else {
        res.status(422).send('Please send valid _id and user');
    }
};

const createJob = (req, res) => {
    const job = req.body.job;
    if (job.company && job.position && job.status && job.user) {
        Job.save({ ...job })
            .then(job => res.json(job))
            .catch(err =>
                res.status(500).json({ error: 'Error saving the job' })
            );
    } else {
        res.status(422).send('Please send valid company, position, status, user');
    }
};

module.exports = {
    getAllJobs,
    getJob,
    createJob,
};
