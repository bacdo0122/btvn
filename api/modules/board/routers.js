const board = require("./index.js");
const express = require("express");
const routers = express.Router();

routers.get("/", async (req, res) => {
  try {
    const boards = await board.find();
    res.status(200).json(boards);
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: err.message || "null",
    });
  }
});

routers.get("/:boardId", async (req, res) => {
  try {
    const { boardId } = req.params;
    const foundBoard = await board.findById(boardId);
    res.send({
      success: 1,
      data: foundBoard,
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
  const newBoard = new board({
    name: req.body.name,
    background: req.body.background,
    ownerId: req.body.ownerId,
    memberIds: req.body.memberIds,
  });
  try {
    const addBoard = await newBoard.save();
    res.json(addBoard);
  } catch (error) {
    console.log(error);
  }
});

routers.patch("/:fixBoardid", async (req, res) => {
  try {
    const fixBoard = await board.updateOne(
      { _id: req.params.fixBoardid },
      {
        $set: {
          name: req.body.name,
        },
      }
    );
    res.json(fixBoard);
  } catch (error) {
    console.log(error);
  }
});

module.exports = routers;
