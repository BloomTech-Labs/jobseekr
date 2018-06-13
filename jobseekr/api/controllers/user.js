const User = require('../models/userModel');

const createUser = (req, res) => {
  const { username, password, email } = req.body;
  if (username && password && email) {
    const newUser = new User({ username, password, email });
    newUser
      .save()
      .then(user => res.send(user))
      .catch((err) => {
        res.status(422).send('Error saving the user');
      });
  } else {
    res.status(422).send('Please send a valid username and password');
  }
};

module.exports = createUser;
