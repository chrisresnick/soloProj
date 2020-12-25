const express = require("express");
const asyncHadler = require("express-async-handler");
const aws = require("aws-sdk");
const awsConfig = require("../../config/index.js").awsConfig;
const uuid = require("uuid");

const s3 = new aws.S3();
s3.config.update({
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
    region: awsConfig.region
});


const router = express.Router();

router.post("/upload", asyncHadler(async (req, res) => {
    const filetype = req.body.filetype;
    if (!(["image/jpeg", "image/png", "image/gif"].includes(filetype))){
        return res.json({error: "Filetype must be jpeg, gif or png"});
    }
    const params = {
        Bucket: "climbzy",
        Key: uuid.v4(),
        Expires: 60,
        ContentType: filetype,
        ACL: "public-read",
    };
    const url = await s3.getSignedUrlPromise("putObject", params);
    return res.json({
        postUrl: url,
        getUrl: url.split("?")[0]
    });
}));


module.exports = router;
