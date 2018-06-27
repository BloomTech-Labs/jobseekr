// Load the SDK and UUID
const AWS = require('aws-sdk');
const uuid = require('uuid');
require('dotenv').config();
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');

const AWS_ID = process.env.AWS_ACCESS_KEY_ID;
const REGION = process.env.AWS_REGION;
const BUCKET_NAME = process.env.S3_BUCKET_NAME;

AWS.config.update({ region: REGION });

let s3 = new AWS.S3({apiVerson: '2006-03-01'});

const uploadParams = { Bucket: BUCKET_NAME, Key: '', Body: ''};

// configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // files saved to upload directory
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    // random ID generated using uuidv4()
    // path.extname() extracts file extension out
    // filename available as req.file.pathname in route handler
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, newFilename);
  },
});
// create the multer instance that will be used to upload/save the file
const upload = multer({ storage });
console.log({ upload });

const uploadFile = (req, res) => {
  upload.single('selectedFile');
  const { file } = req;
  console.log("reqest keys: ", Object.keys(req.body));
  console.log({ file });
};
// // Create unique bucket name
// const bucketName = 'jobseekr';
// // Create name for uploaded object key

// const uploadFile = (req, res) => {
//   console.log("request keys: ", Object.keys(req));
//   console.log("request data: ", req.data);

//   const keyName = req.data.name;
//   const { type } = req.data; 
//   // Create a promise on S3 service object
//   const upload = new AWS.S3.ManagedUpload({apiVersion: '2006-03-01'}, {
//     params: { Bucket: bucketName, Key: keyName, Body: stream }
//   })
  
//   // Handle promise fulfilled/rejected states
//   upload
//     .then((data) => {
//       // Create params for putObject call
//       var objectParams = {Bucket: bucketName, Key: keyName};
//       // Create object upload promise
//       var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
//       uploadPromise
//         .then((data) => {
//           console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
//         });
//       }).catch(
//         function(err) {
//           console.error(err, err.stack);
//         });
// }

module.exports = uploadFile;