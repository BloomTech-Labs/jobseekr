const Meetup = require('../models/meetupModel');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const mySecret = process.env.SECRET || "random";

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

const createMeetup = async (req, res) => {
  const { meetup } = req.body;
  const storedPayload = await jwt.verify(meetup.token, mySecret);
  const email = storedPayload.email
  User.findOne({ email }, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid user id' });
      return;
    }
    if (user === null) {
      res.status(422).json({ error: 'No user with that id in our records' });
      return;
    }
    meetup.user = user;
    if (meetup.dateOfEvent && meetup.eventName && meetup.user) {
      const newMeetup = new Meetup ({ ...meetup });
      newMeetup.save()
        .then(meetUp => res.json(meetUp))
        .catch(err => res.status(500).json({ error: 'Error saving the meetup' }));
    } else {
      res.status(400).json({ error: 'Please send valid date and name for event' });
    }
  });
};

module.exports = {
  getAllMeetups,
  getMeetup,
  createMeetup,
};
