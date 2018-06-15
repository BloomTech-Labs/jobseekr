const { createUser, login, getAllJobs } = require('../controllers');

module.exports = (server) => {
  server.route('/signup').post(createUser);
  server.route('/login').post(login);
  server.route('/jobs').get(getAllJobs);
};
