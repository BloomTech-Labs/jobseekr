const { createUser, changePassword, changeEmail } = require('./user');
const login = require('./login');
const { getAllJobs, createJob, editJob } = require('./jobs');
const { createMeetup } = require('./meetups');

module.exports = {
  createUser,
  login,
  getAllJobs,
  changePassword,
  changeEmail,
  createMeetup,
  createJob,
  editJob,
};
