const card = require("./index.js");
const express = require("express");
const routers = express.Router();

routers.get("/api/cards", async (req, res) => {
  try {
    const cards = await card.find();
    console.log(cards);
    res.status(200).json(cards);
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: err.message || "null",
    });
  }
});

routers.get("/api/cards/:cardId", async (req, res) => {
  try {
    const { cardId } = req.params;
    const foundCard = await card.findById(cardId);
    res.send({
      success: 1,
      data: foundCard,
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
  const newCard = new card({
    listId: req.body.listId,
    title: req.body.title,
    description: req.body.description,
    order: req.body.order,
    members: req.body.members,
    archived: req.body.archived,
    boardId: req.body.boardId,
  });
  try {
    const addCard = await newCard.save();
    res.json(addCard);
  } catch (error) {
    console.log(error);
  }
});

routers.delete("/:cardId", async (req, res) => {
  try {
    const deleteCard = await card.remove({ _id: req.params.cardId });
    res.json(deleteCard);
  } catch (error) {
    console.log(error);
  }
});

routers.patch("/:id", async (req, res) => {
  try {
    const fixCard = await card.updateOne(
      { _id: req.params.id },
      {
        $set: {
          listId: req.body.listId,
          title: req.body.title,
          description: req.body.description,
          order: req.body.order,
          members: req.body.members,
          archived: req.body.archived,
          boardId: req.body.boardId,
        },
      }
    );
    res.json(fixCard);
  } catch (error) {
    console.log(error);
  }
});

module.exports = routers;
