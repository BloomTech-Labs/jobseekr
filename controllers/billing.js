var stripe = require("stripe")("sk_test_QAkzeAsF7YJpHPkmR2WvVd8v");

const billing = (req, res) => {
  const token = req.body.token;
  stripe.charges
    .create({
      amount: 199,
      currency: "usd",
      source: "tok_visa"
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
