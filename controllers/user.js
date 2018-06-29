const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const mySecret = process.env.SECRET || 'random';

const createUser = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const newUser = new User({ email, password });
    newUser
      .save()
      .then(user => res.status(200).send(user))
      .catch(err => {
        console.log(err);
        res.status(422).send(err);
      });
  } else {
    res.status(422).send('Please send a valid username and password');
  }
};

const changePassword = async (req, res) => {
  // - get token, old password, and new password from the request
  const { token, oldPassword, newPassword } = req.body;
  //- use jwt.verify to find email
  const storedPayload = await jwt.verify(token, mySecret);
  const email = storedPayload.email;
  //- find user using email
  User.findOne({ email }, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid Email/Password' });
      return;
    }
    if (user === null) {
      res.status(422).json({ error: 'No user with that email in our records' });
      return;
    }
    //- - make sure that the current password matches old password (got code from login controller)
    user.checkPassword(oldPassword, (nonMatch, hashMatch) => {
      if (nonMatch !== null) {
        res
          .status(422)
          .json({ error: 'old password does not match our stored password' });
        return;
      }
      //- - if matches, change password to the new password
      if (hashMatch) {
        bcrypt.hash(newPassword, 11, (err, hash) => {
          User.findOneAndUpdate({ email }, { password: hash }, { new: true })
            .then(user => res.status(200).send(user))
            .catch(err => {
              res.status(422).json({ error: 'error updating password', err });
            });
        });
      }
    });
  });
};

const changeEmail = async (req, res) => {
  // - get token, old email, and new email from the request
  const { token, newEmail } = req.body;
  let { oldEmail } = req.body;
  //- use jwt.verify to find email
  const storedPayload = await jwt.verify(token, mySecret);
  const storedEmail = storedPayload.email;
  oldEmail = oldEmail.toLowerCase();
  if (storedEmail === oldEmail) {
    //- find user using email
    User.findOneAndUpdate(
      { email: oldEmail },
      { email: newEmail },
      { new: true }
    )
      .then(user => res.status(200).send(user))
      .catch(err => {
        res.status(422).json({ error: 'error updating email', err });
      });
  } else {
    res.status(422).json({
      error: 'old email does not match our records for signed in user'
    });
  }
};

module.exports = {
  createUser,
  changePassword,
  changeEmail
};
