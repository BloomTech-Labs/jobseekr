const { createUser, login, getAllJobs } = require('../controllers');

module.exports = (server) => {
  // GET ROUTES
  server.route('/jobs').get(getAllJobs);
  
  // PUT ROUTES

  // DELETE ROUTES

  // POST ROUTES
  server.route('/signup').post(createUser);
  server.route('/login').post(login);
};
