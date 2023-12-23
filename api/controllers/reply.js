const express = require("express");
const router = express.Router();
const db = require("../models");
const { Reply } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/micro_posts
//    POST   /api/micro_posts
//    GET    /api/micro_posts/:id
//    PUT    /api/micro_posts/:id
//    DELETE /api/micro_posts/:id
//
// The full URL's for these routes are composed by combining the
// prefixes used to load the controller files.
//    /api comes from the file ../app.js
//    /micro_posts comes from the file ./Replys.js

router.get("/", (req, res) => {
  Reply.findAll({}).then((allPosts) => res.json(allPosts));
});

router.get("/resumes/:id", (req, res) => {
  Reply.findAll({ where: { matching_id: req.params.id } }).then((allPosts) =>
    res.json(allPosts)
  );
});

router.post("/", (req, res) => {
  console.log(req.body);
  let { content } = req.body;
  let { matching_id } = req.body;

  Reply.create({ content, matching_id })
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Reply.findByPk(id).then((comment) => {
    if (!comment) {
      return res.sendStatus(404);
    }

    res.json(comment);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Reply.findByPk(id).then((comment) => {
    if (!comment) {
      return res.sendStatus(404);
    }
    comment.content = req.body.content;
    comment
      .save()
      .then((updatedPost) => {
        res.json(updatedPost);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Reply.findByPk(id).then((comment) => {
    if (!comment) {
      return res.sendStatus(404);
    }

    comment.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;