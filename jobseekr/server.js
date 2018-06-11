const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

let server = express();
server.use(express.json());
let PORT = process.env.PORT || 5000;

server.use(morgan('combined'));
server.use(helmet());
server.use(
  cors({
    origin: 'http://locahost:3000',
    credentials: true,
    methods: ['GET', 'POST']
  })
);

mongoose
  .connect('mongodb://localhost/jobseekr')
  .then(pass => {
    console.log('Mongo Connected');
  })
  .catch(error => {
    console.log('Error connecting to Mongo.');
  });

server.listen(5000, () => {
  return console.log(`Server is Listening on port: ${PORT}`);
});
