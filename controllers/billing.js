var stripe = require('stripe')('sk_test_QAkzeAsF7YJpHPkmR2WvVd8v');

const billing = (req, res) => {
  const { token, email, subscribe } = req.body;

  if (subscribe) {
    stripe.customers
      .create({
        description: `Membership for: ${email} `,
        source: 'tok_visa' // obtained with Stripe.js
      })
      .then(res => {
        stripe.subscriptions
          .create({
            customer: res.id,
            items: [
              {
                plan: 'plan_D67u9PZvDblzw1'
              }
            ]
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  stripe.charges
    .create({
      amount: 199,
      currency: 'usd',
      source: 'tok_visa'
    })
    .then(pass => {
      res.status(200);
      res.json(pass);
    })
    .catch(err => {
      res.status(400);
      res.json(err);
    });
};

module.exports = {
  billing
};
