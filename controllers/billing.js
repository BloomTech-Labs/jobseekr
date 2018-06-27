const stripe = require('stripe')('sk_test_QAkzeAsF7YJpHPkmR2WvVd8v');
const User = require('../models/userModel');

const billing = (req, res) => {
  const { token, email, subscribe } = req.body;
  User.findOne({ email })
    .then(user => {
      if (user.stripeCustomerID === 'none') {
        stripe.customers
          .create({
            description: `Membership for: ${email} `,
            source: 'tok_visa' // obtained with Stripe.js
          })
          .then(stripeCustomer => {
            User.findOneAndUpdate(
              { email },
              { stripeCustomerID: stripeCustomer.id }
            )
              .then(updatedUser => {
                if (subscribe) {
                  stripe.subscriptions
                    .create({
                      customer: updatedUser.stripeCustomerID,
                      items: [
                        {
                          plan: 'plan_D7zcL7B1VE3NzY'
                        }
                      ]
                    })
                    .then(subConfirmation => {
                      User.findOneAndUpdate(
                        { email },
                        {
                          isMember: true
                        }
                      )
                        .then(updatedUser => {
                          res.status(200);
                          res.json({ msg: 'Subscriptions created' });
                        })
                        .catch(err => {
                          res.status(400);
                          res.json({
                            msg: 'Error creating Subscription',
                            err
                          });
                        });
                    })
                    .catch(err => {
                      res.send({ msg: 'Error updating User info' });
                    });
                }
              })
              .catch(err => err);
          })
          .catch(err => err);
      }
      if (!subscribe) {
        stripe.charges
          .create({
            amount: 199,
            currency: 'usd',
            source: 'tok_visa'
          })
          .then(chargeConfirm => {
            User.findOneAndUpdate({ email }, { $inc: { singleDecisions: 1 } })
              .then(user => {
                res.status(200);
                res.json({ msg: 'Single Decision added', user });
              })
              .catch(err => {
                res.status(400);
                res.json({ msg: 'Error Updating User' });
              });
          })
          .catch(err => {
            res.status(400);
            res.json({ msg: 'Error with Stripe' });
          });
      }
      if (subscribe && user.isMember === false) {
        User.findOne({ email })
          .then(user => {
            stripe.subscriptions
              .create({
                customer: user.stripeCustomerID,
                items: [
                  {
                    plan: 'plan_D7zcL7B1VE3NzY'
                  }
                ]
              })
              .then(subConfirmation => {
                User.findOneAndUpdate(
                  { email },
                  {
                    isMember: true
                  }
                )
                  .then(updatedUser => {
                    res.status(200);
                    res.json({ msg: 'User sub Created', updatedUser });
                  })
                  .catch(err => {
                    res.status(400);
                    res.json({ msg: 'Error updating User info', err });
                  });
              })
              .catch(err => {
                res.status(400);
                res.json({ msg: 'Error creating Stripe Subscription', err });
              });
          })
          .catch(err => {
            res.status(400);
            res.json({ msg: 'Error finding user', err });
          });
      } else if (subscribe) {
        res.status(200);
        res.json({ msg: 'User is already subscribed' });
      }
    })
    .catch(err => {
      res.status(400);
      res.json({ msg: 'User not found', err });
    });
};

module.exports = {
  billing
};
