const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const mySecret = process.env.SECRET || 'random';
const stripe = require('stripe')('sk_test_QAkzeAsF7YJpHPkmR2WvVd8v');

const createUser = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const newUser = new User({
      email,
      password
    });
    newUser
      .save()
      .then(user => {
        const payload = {
          email: user.email
        };
        const token = jwt.sign(payload, mySecret.toString());
        res.json({
          token
        });
      })
      .catch(err => {
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
  User.findOne(
    {
      email
    },
    (err, user) => {
      if (err) {
        res.status(403).json({
          error: 'Invalid Email/Password'
        });
        return;
      }
      if (user === null) {
        res.status(422).json({
          error: 'No user with that email in our records'
        });
        return;
      }
      //- - make sure that the current password matches old password (got code from login controller)
      user.checkPassword(oldPassword, (nonMatch, hashMatch) => {
        if (nonMatch !== null) {
          res.status(422).json({
            error: 'old password does not match our stored password'
          });
          return;
        }
        //- - if matches, change password to the new password
        if (hashMatch) {
          bcrypt.hash(newPassword, 11, (err, hash) => {
            User.findOneAndUpdate(
              {
                email
              },
              {
                password: hash
              },
              {
                new: true
              }
            )
              .then(user => res.status(200).send(user))
              .catch(err => {
                res.status(422).json({
                  error: 'error updating password',
                  err
                });
              });
          });
        }
      });
    }
  );
};

const changeEmail = async (req, res) => {
  let { oldEmail, newEmail, token } = req.body;
  oldEmail = oldEmail.toLowerCase();
  newEmail = newEmail.toLowerCase();
  const storedPayload = await jwt.verify(token, mySecret);
  const email = storedPayload.email;
  if (email === oldEmail) {
    User.findOneAndUpdate(
      {
        email: oldEmail
      },
      {
        email: newEmail
      },
      {
        new: true
      }
    )
      .then(user => {
        const payload = { email: newEmail };
        token = jwt.sign(payload, mySecret.toString());
        let data = { user, token };
        if (data.user.stripeCustomerID !== 'none') {
          stripe.customers
            .update(data.user.stripeCustomerID, {
              email: data.user.email
            })
            .then(updatedUser => {
              res.status(200).json(data);
            })
            .catch(err => {
              res.status(422).json('Error updating Stripe Customer email');
            });
        } else {
          res.status(200).json(data);
        }
      })
      .catch(err => {
        res.status(422).json({
          error: 'error updating email',
          err
        });
      });
  } else {
    res
      .status(422)
      .json({ error: `Please log in as ${oldEmail} to change your email` });
  }
};

module.exports = {
  createUser,
  changePassword,
  changeEmail
};
