const {
  createUser,
  login,
  getAllJobs,
  changePassword,
  changeEmail,
} = require('../controllers');
const path = require('path');


module.exports = (server) => {
  // GET ROUTES
  server.route('/api/jobs').get(getAllJobs);
  
  // PUT ROUTES
  server.route('/api/changepassword').put(changePassword);
  server.route('/api/changeemail').put(changeEmail);
  
  // DELETE ROUTES
  
  // POST ROUTES
  server.route('/api/signup').post(createUser);
  server.route('/api/login').post(login);
};
