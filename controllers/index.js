const { createUser, changePassword, changeEmail } = require('./user');
const login = require('./login');
const { getAllJobs } = require('./jobs');
const { createMeetup, getAllMeetups, destroyMeetup } = require('./meetups');

module.exports = {
  createUser,
  login,
  getAllJobs,
  changePassword,
  changeEmail,
  createMeetup,
  getAllMeetups,
  destroyMeetup,
};
