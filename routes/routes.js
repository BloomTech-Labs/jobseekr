const {
  createUser,
  login,
  getAllJobs,
  changePassword,
  changeEmail,
  createMeetup,
  createJob,
  editJob,
} = require('../controllers');

module.exports = (server) => {
  // GET ROUTES
  server.route('/api/jobs').get(getAllJobs);
  
  // PUT ROUTES
  server.route('/api/changepassword').put(changePassword);
  server.route('/api/changeemail').put(changeEmail);
  server.route('/api/jobs').put(editJob);
  
  // DELETE ROUTES
  
  // POST ROUTES
  server.route('/api/signup').post(createUser);
  server.route('/api/login').post(login);
  server.route('/api/meetups').post(createMeetup);
  server.route('/api/jobs').post(createJob);
};
