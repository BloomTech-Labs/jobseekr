const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes/routes.js');

const server = express();
server.use(express.json());
const PORT = process.env.PORT || 5000;

server.use(express.static(path.join(__dirname, '/FrontEnd/build')));

server.use(morgan('combined'));
server.use(helmet());
server.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'PUT', 'POST'],
}));

routes(server);

mongoose
  .connect('mongodb://localhost/jobseekr')
  .then((pass) => {
    console.log('Mongo Connected');
  })
  .catch((error) => {
    console.log('Error connecting to Mongo.');
  });

server.listen(5000, () => console.log(`Server is Listening on port: ${PORT}`));
