const mongoose = require('mongoose');
const Users = require('./userModel');

const JobSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
    position: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 80,
    },
    status: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    sourceOfJob: String,
    linkToPosting: String,
    pointOfContactName: {
      type: String,
      minlength: 1,
      maxlength: 50,
    },
    pointOfContactType: String,
    pointOfContact: {
      type: String,
      minlength: 1,
      maxlength: 50,
    },
    linkToResume: String,
    linkToCoverLetter: String,
    resolution: Boolean,
    notes: {
      type: String,
      minlength: 1,
      maxlength: 500,
    },
    gotRejection: Boolean,
    linkToRejection: String,
    gotOffer: Boolean,
    linkToOffer: String,
  },
  { timestamps: true },
);
// add validation for link string types

module.exports = mongoose.model('Jobs', JobSchema);
