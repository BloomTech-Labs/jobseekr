const {
  createUser,
  login,
  getAllJobs,
  changePassword,
  changeEmail,
  createMeetup,
  getAllMeetups,
  destroyMeetup,
} = require('../controllers');


module.exports = (server) => {
  // GET ROUTES
  server.route('/api/jobs').get(getAllJobs);
  server.route('/api/meetups').get(getAllMeetups);
  
  // PUT ROUTES
  server.route('/api/changepassword').put(changePassword);
  server.route('/api/changeemail').put(changeEmail);
  
  // DELETE ROUTES
  server.route('/api/meetups').delete(destroyMeetup);
  
  // POST ROUTES
  server.route('/api/signup').post(createUser);
  server.route('/api/login').post(login);
  server.route('/api/meetups').post(createMeetup);
};
