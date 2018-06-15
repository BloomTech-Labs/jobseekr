const User = require('../models/userModel');

const createUser = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const newUser = new User({ email, password });
    newUser
      .save()
      .then(user => res.send(user))
      .catch((err) => {
        res.status(422).send({ error: 'Error saving the user', err });
      });
  } else {
    res.status(422).send({ error: 'Please send a valid email and password' });
  }
};

// const changeEmail = (req, res) => {
//   const { email, _id } = req.body;
//   if (!email) {
//     res.status(400)
//       .send({ error: 'Must Provide an email' });
//   }
//   User.findById(_id, (err, userDoc) => {
//     if (err || userDoc === null) {
//       res.status(400)
//         .send({ error: 'Cannot find user with that id' });
//     }
//     userDoc.email = email;
//     userDoc.save((saveErr, savedUser) => {
//       if (err || userDoc === null) {
//         res.status(500)
//           .send({ error: 'The server isn`t working properly' });
//       }
//       res.send({ userDoc });
//     });
//   });
// };

module.exports = createUser;
