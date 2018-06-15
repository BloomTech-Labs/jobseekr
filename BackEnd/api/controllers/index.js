const { createUser, changePassword } = require('./user');
const login = require('./login');
const { getAllJobs } = require('./jobs');

module.exports = {
  createUser,
  login,
  getAllJobs,
  changePassword,
};
