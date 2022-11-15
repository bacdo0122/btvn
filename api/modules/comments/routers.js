const comment = require("./index.js");
const express = require("express");
const routers = express.Router();
routers.get("/", async (req, res) => {
  try {
    const comments = await comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: err.message || "null",
    });
  }
});

routers.get("/:commentId", async (req, res) => {
  try {
    const { commentId } = req.params;
    const foundComment = await comment.findById(commentId);
    res.send({
      success: 1,
      data: foundComment,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: err.message || "null",
    });
  }
});

routers.post("/", async (req, res) => {
  const newComment = new comment({
    cardId: req.body.cardId,
    text: req.body.text,
    userId: req.body.userId,
  });
  try {
    const addComment = await newComment.save();
    res.json(addComment);
  } catch (error) {
    console.log(error);
  }
});

routers.delete("/:commentId", async (req, res) => {
  try {
    const deleteComment = await comment.remove({ _id: req.params.commentId });
    res.json(deleteComment);
  } catch (error) {
    console.log(error);
  }
});

routers.patch("/:cmtId", async (req, res) => {
  try {
    const fixComment = await comment.updateOne(
      { _id: req.params.cmtid },
      {
        $set: {
          cardId: req.body.cardId,
          text: req.body.text,
          userId: req.body.userId,
        },
      }
    );
    res.json(fixComment);
  } catch (error) {
    console.log(error);
  }
});

module.exports = routers;
