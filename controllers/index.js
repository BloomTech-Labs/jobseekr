const { createUser, changePassword, changeEmail } = require('./user');
const login = require('./login');
const { getAllJobs, createJob, editJob } = require('./jobs');
const { createMeetup, getAllMeetups, destroyMeetup } = require('./meetups');
const {
  getAllContributions,
  createContribution,
  destroyContribution, } = require('./contributions')
const { billing } = require("./billing");

module.exports = {
  createUser,
  login,
  getAllJobs,
  changePassword,
  changeEmail,
  createMeetup,
  createJob,
  editJob,
  billing,
  getAllMeetups,
  destroyMeetup,
  getAllContributions,
  createContribution,
  destroyContribution,
};
