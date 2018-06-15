const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const mySecret = require('../config');

const createUser = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const newUser = new User({ email, password });
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

const changePassword = (req, res) => {
  const { oldPassword, newPassword, id } = req.body;
  if (!oldPassword || !newPassword || !id) {
    res.status(400).send({ error: 'must provide both the old and new password and the user\'s id' });
  }
    // User.findById(id, (err, doc) => {
    //   if (err || doc === null) {
    //     res.status(400).send({ error: 'cannot find user by that id' })
    //   }
    //   doc.password = newPassword;
    //       doc.save(saveErr, savedUser)
    //       .then(savedUser => res.status(200).send(savedUser))
    //       .catch(saveErr => res.status(422).send(saveErr));
    //     });
    // console.log(Object.keys(changedUser));
    // console.log(changedUser.mongooseCollection);
    User.findOneAndUpdate(
      id,
      { password: newPassword },
      // runValidators: true, 
      (err, doc) => {
        doc.save()
        .then(doc => res.status(200).send(doc))
        .catch(err => res.status(422).send(err));
      },
    )    
  // } else {
  //   res.status(422).send('Please send your old password and a new password')
  // }
  }

module.exports = {
  createUser,
  changePassword,
};

async const changePassword = (req, res) => {
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
        res.status(422).json({ error: "old password does not match our stored password" });
        return;
      }
      //- - if matches, change password to the new password
      if (hashMatch) {
        User.findOneAndUpdate({ email }, { password: newPassword }, { new: true })
          .then(user => res.status(200).send(user))
          .catch(err => {
            res.status(422).json({ error: 'error updating password', err });
          });
      }
    });
  })
}

async const changeEmail = (req, res) => {
  // - get token, old email, and new email from the request
  const { token, oldEmail, newEmail } = req.body;
  //- use jwt.verify to find email
  const storedPayload = await jwt.verify(token, mySecret);
  const storedEmail = storedPayload.email;
  oldEmail = oldEmail.toLowerCase();
  if (storedEmail === oldEmail) {
    //- find user using email
    User.findOneAndUpdate({ email: oldEmail }, { email: newEmail }, { new: true })
      .then(user => res.status(200).send(user))
      .catch(err => {
        res.status(422).json({ error: 'error updating email', err });
      });
  } else {
    res.status(422).json({ error: 'old email does not match our records for signed in user' });
  }
}