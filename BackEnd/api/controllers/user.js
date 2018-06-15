const User = require('../models/userModel');

const createUser = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const newUser = new User({ email, password });
    console.log({ newUser });
    newUser
      .save()
      .then(user => res.status(200).send(user))
      .catch((err) => {
        res.status(422).send(err);
      });
  } else {
    res.status(422).send('Please send a valid username and password');
  }
};

module.exports = createUser;
