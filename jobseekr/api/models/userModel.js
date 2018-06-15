const mongoose = require('mongoose');
require('mongoose-type-email');
const bcrypt = require('bcrypt');

const SALT = 11;

const UserSchema = mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
    unique: true,
    lowercase: true,
  },
  subscriptionType: String,
  creditCardInfo: {
    ccNumber: Number,
    expirationDate: Date,
    cvv: Number,
  },
});

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT, (err, hash) => {
    this.password = hash;
    next();
  });
});

UserSchema.methods.checkPassword = function (plainTextPassword, cb) {
  bcrypt.compare(plainTextPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('Users', UserSchema);
