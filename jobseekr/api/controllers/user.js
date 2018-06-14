const User = require('../models/userModel');

const createUser = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const newUser = new User({ email, password });
    newUser
      .save()
      .then(user => res.send(user))
      .catch((err) => {
        res.status(422).send('Error saving the user', err);
      });
  } else {
    res.status(422).send('Please send a valid username and password');
  }
};

module.exports = createUser;
