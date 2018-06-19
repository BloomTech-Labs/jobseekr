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
  server.route('/jobs').get(getAllJobs);
  server.route('*').get((req, res) => {
    res.sendFile(path.join(__dirname+'/FrontEnd/build/index.html'));
  });
  
  // PUT ROUTES
  server.route('/changepassword').put(changePassword);
  server.route('/changeemail').put(changeEmail);

  // DELETE ROUTES

  // POST ROUTES
  server.route('/signup').post(createUser);
  server.route('/login').post(login);
};
