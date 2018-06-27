const { createUser, changePassword, changeEmail } = require('./user');
const login = require('./login');
<<<<<<< HEAD
const { getAllJobs, createJob, editJob } = require('./jobs');
const { createMeetup } = require('./meetups');
=======
const { getAllJobs } = require('./jobs');
const { createMeetup, getAllMeetups, destroyMeetup } = require('./meetups');
const {
  getAllContributions,
  createContribution,
  destroyContribution, } = require('./contributions')
const { billing } = require("./billing");
>>>>>>> d8a824a21023a9265a91d786606b3aead1db460e

module.exports = {
  createUser,
  login,
  getAllJobs,
  changePassword,
  changeEmail,
  createMeetup,
<<<<<<< HEAD
  createJob,
  editJob,
=======
  billing,
  getAllMeetups,
  destroyMeetup,
  getAllContributions,
  createContribution,
  destroyContribution,
>>>>>>> d8a824a21023a9265a91d786606b3aead1db460e
};
