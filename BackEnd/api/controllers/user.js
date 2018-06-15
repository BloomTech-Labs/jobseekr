const User = require('../models/userModel');

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
  const { oldPassword, newPassword } = req.body;
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

/*

get id, old password, and new password from the request
find that user by the id and 

make sure that the current password
matches the old password in the request.

change password to the new password.