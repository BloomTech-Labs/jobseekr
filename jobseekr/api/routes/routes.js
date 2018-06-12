const { createUser, login, getAllJobs } = require('../controllers');
// const authenticate = require('../utils/middleware');

module.exports = server => {
   server.route('/signup').post(createUser);
   server.route('/login').post(login);
   server.route('/jobs').get(getAllJobs);
//    server.route('/create').post(authenticate, addNote);
//    server.route('/edit/:id').put(authenticate, editNote);
//    server.route('/note/:id').delete(authenticate, deleteNote);
}