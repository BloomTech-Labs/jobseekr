const {
  createUser,
  login,
  getAllJobs,
  changePassword,
  changeEmail,
} = require('../controllers');

module.exports = (server) => {
  // GET ROUTES
  server.route('/jobs').get(getAllJobs);
  
  // PUT ROUTES
  server.route('/changepassword').put(changePassword);
  server.route('/changeemail').put(changeEmail);

  // DELETE ROUTES

  // POST ROUTES
  server.route('/signup').post(createUser);
  server.route('/login').post(login);
};
