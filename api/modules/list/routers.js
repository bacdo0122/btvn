const list = require("./index.js");
const express = require("express");
const routers = express.Router();
routers.get("/", async (req, res) => {
  try {
    const lists = await list.find();
    res.status(200).json(lists);
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: err.message || "null",
    });
  }
});

routers.get("/:listId", async (req, res) => {
  try {
    const { listId } = req.params;
    const foundList = await list.findById(listId);
    res.send({
      success: 1,
      data: foundList,
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
  const newList = new list({
    name: req.body.name,
    order: req.body.order,
    archived: req.body.archived,
    boardId: req.body.boardId,
  });
  try {
    const addList = await newList.save();
    res.json(addList);
  } catch (error) {
    console.log(error);
  }
});

routers.delete("/:listId", async (req, res) => {
  try {
    const deleteList = await list.remove({ _id: req.params.listId });
    res.json(deleteList);
  } catch (error) {
    console.log(error);
  }
});

routers.patch("/:listsId", async (req, res) => {
  try {
    const fixList = await list.updateOne(
      { _id: req.params.cmtid },
      {
        $set: {
          text: req.body.text,
        },
      }
    );
    res.json(fixList);
  } catch (error) {
    console.log(error);
  }
});

module.exports = routers;
