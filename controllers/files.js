// Load the SDK and UUID
const AWS = require('aws-sdk');
const uuid = require('uuid');
require('dotenv').config();
// const upload = require('../server');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');

const AWS_ID = process.env.AWS_ACCESS_KEY_ID;
const REGION = process.env.AWS_REGION;
const BUCKET_NAME = process.env.S3_BUCKET_NAME;

AWS.config.update({ region: REGION });

let s3 = new AWS.S3({apiVerson: '2006-03-01'});

const uploadParams = { Bucket: BUCKET_NAME, Key: '', Body: ''};

const uploadFile = (req, res) => {
  
  console.log("\nrequest object keys are>>>>>", Object.keys(req), "\n\n");
  console.log("Is req.file defined?", req.files);
  console.log("This is our file !!!!!", req.files.data)
  console.log("\n REQ.BODY>>>>> ", req.body, "\n\n");
  console.log("\n REQ.QUERY>>>>> ", req.query, "\n\n");
  console.log("\n REQ.DATA>>>>> ", req.data, "\n\n");
  console.log("\n REQ.PARAMS>>>>> ", req.params, "\n\n");
  console.log("\n REQ.HEADERS>>>>> ", req.headers, "\n\n");
  // console.log('file is', file);
};


module.exports = uploadFile;