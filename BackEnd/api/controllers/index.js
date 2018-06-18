const { createUser, changePassword, changeEmail } = require('./user');
const login = require('./login');
const { getAllJobs } = require('./jobs');

module.exports = {
  createUser,
  login,
  getAllJobs,
  changePassword,
  changeEmail,
};
