const express = require("express");
const router = express.Router();

// Load each controller
const microPostsController = require("./microPosts.js");
const authController = require("./auth.js");
const microPostsCommentController = require("./reply.js");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/micro_posts", microPostsController);
router.use("/auth", authController);
router.use("/comments", microPostsCommentController);

module.exports = router;

// //New for AWS
// const AWS = require("aws-sdk");
// const s3 = new AWS.S3();

// (async () => {
//   await s3
//     .putObject({
//       Body: "hello world",
//       Bucket: "cuny-sphere",
//       Key: "my-file.txt",
//     })
//     .promise();
// })();