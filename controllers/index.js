const { createUser, changePassword, changeEmail } = require('./user');
const login = require('./login');
const { getAllJobs } = require('./jobs');
const { createMeetup, getAllMeetups, destroyMeetup } = require('./meetups');
const {
  getAllContributions,
  createContribution,
  destroyContribution, } = require('./contributions')

module.exports = {
  createUser,
  login,
  getAllJobs,
  changePassword,
  changeEmail,
  createMeetup,
  getAllMeetups,
  destroyMeetup,
  getAllContributions,
  createContribution,
  destroyContribution,
};
