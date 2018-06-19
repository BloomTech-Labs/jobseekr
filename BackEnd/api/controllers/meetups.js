const Meetup = require('../models/meetupModel');
const jwt = require('jsonwebtoken');
const mySecret = require('../config.js');

const getAllMeetups = (req, res) => {
  const { username } = req.body;
  Meetup.find({ username })
    .then(meetups => res.json(meetups))
    .catch(err => res.status(500).json({ error: 'Error fetching Meetups' }));
};

const getMeetup = (req, res) => {
  const { username, _id } = req.body;
  if (username && _id) {
    Meetup.find({ username, _id })
      .then(meetup => res.json(meetup))
      .catch(err => res.status(500).json({ error: 'Error fetching the meetup' }));
  } else {
    res.status(422).send('Please send valid _id and username');
  }
};

const createMeetup = (req, res) => {
  const { meetup } = req.body;""
  if (meetup.dateOfEvent && meetup.eventName) {
    Meetup.save({ ...meetup })
      .then(meetup => res.json(meetup))
      .catch(err => res.status(500).json({ error: 'Error saving the meetup' }));
  } else {
    res.status(400).json({ error: 'Please send valid date and name for event' });
  }
};

module.exports = {
  getAllMeetups,
  getMeetup,
  createMeetup,
};
