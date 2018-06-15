const {
  createUser,
  login,
  getAllJobs,
  changePassword, 
} = require('../controllers');

module.exports = (server) => {
  // GET ROUTES
  server.route('/jobs').get(getAllJobs);
  
  // PUT ROUTES
  server.route('/changepassword').put(changePassword);

  // DELETE ROUTES

  // POST ROUTES
  server.route('/signup').post(createUser);
  server.route('/login').post(login);
};
