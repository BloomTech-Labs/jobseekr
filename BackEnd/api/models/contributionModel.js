const mongoose = require('mongoose');
const Users = require('./userModels');

const ContributionSchema = mongoose.Schema(
  {
    dateOfContribution: {
      type: Date,
      required: true,
    },
    contributionName: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 40,
    },
    linkToContribution: {
      type: String,
    },
    notes: {
      type: String,
      maxlength: 100,
    },
    user: {
      type: ObjectId,
      ref: 'Users',
    },
  },
  { timestamps: true },
);
// add validation for link string types

module.exports = mongoose.model('Contributions', ContributionSchema);
