const { createUser, changePassword, changeEmail } = require('./user');
const login = require('./login');
const { getAllJobs } = require('./jobs');
const { createMeetup, getAllMeetups, destroyMeetup } = require('./meetups');
const {
  getAllContributions,
  createContribution,
  destroyContribution, } = require('./contributions')
const { billing } = require("./billing");
const { uploadResume, getUserResume } = require('./files');

module.exports = {
  createUser,
  login,
  getAllJobs,
  changePassword,
  changeEmail,
  createMeetup,
  billing,
  getAllMeetups,
  destroyMeetup,
  getAllContributions,
  createContribution,
  destroyContribution,
  uploadResume,
  getUserResume,
};
