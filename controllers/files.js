const AWS = require('aws-sdk');
require('dotenv').config();

const region = process.env.AWS_REGION;
const bucket = process.env.S3_BUCKET_NAME;

AWS.config.update({ region });

const uploadFile = (req, res) => {
  const file = req.files.file.data;
  const type = req.files.file.mimetype;
  const { name } = req.files.file;
  
  const s3 = new AWS.S3();
  const s3Params = {
    Body: file,
    Bucket: bucket,
    Key: name,
    Expires: 60,
    ContentType: type,
    ACL: 'public-read'
  };

  s3.putObject(s3Params, (err, data) => {
    if(err) console.log(err);
    else console.log(data);
  });

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://s3-${region}.amazonaws.com/${bucket}/${name}`
    };
    res.write(JSON.stringify(returnData));
    console.log("\nreturnData >>>", returnData);
    res.end();
  });
};


module.exports = uploadFile;