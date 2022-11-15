const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  title: {
    name: String,
    required: true,
  },
  boardId: {
    type: mongoose.Types.ObjectId,
    ref: "Board",
  },
  columnId: {
    type: mongoose.Types.ObjectId,
    ref: "Column",
  },
  order: {
    type: Number,
    default: 0,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Card", CardSchema);
// const mongoose = require("mongoose");
// const express = require("express");

// const CardSchema = new mongoose.Schema(
//   {
//     listId: {
//       type: Schema.Types.ObjectId,
//       ref: "lists",
//     },
//     title: {
//       type: String,
//       required: true,
//     },
//     description: String,
//     order: {
//       type: Number,
//       required: true,
//       default: 0,
//     },
//     members: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "users",
//       },
//     ],
//     archived: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//     boardId: {
//       type: Schema.Types.ObjectId,
//       ref: "boards",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const CommentSchema = new mongoose.Schema(
//   {
//     cardId: mongoose.Types.ObjectId,
//     userId: {
//       type: Schema.Types.ObjectId,
//       required: true,
//     },
//     text: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const CardModel = mongoose.model("Card", CardSchema);

// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/mindx-demo");

//   const app = express();

//   app.use(express.json());

//   app.get("api/cards", (req, res) => {
//     try {
//       const cards = await CardModel.find();
//       res.send({
//         success: 1,
//         data: cards,
//       });
//     } catch (error) {
//       res.status(400).send({
//         success: 0,
//         data: null,
//         message: err.message || "null",
//       });
//     }
//   });

//   app.get("api/cards/:cardId", (req, res) => {
//     try {
//       const { cardId } = req.params;
//       const foundCard = await CardModel.findById(cardId);
//       res.send({
//         success: 1,
//         data: foundCard,
//       });
//     } catch (error) {
//       res.status(400).send({
//         success: 0,
//         data: null,
//         message: err.message || "null",
//       });
//     }
//   });

//   app.post("api/cards", (req, res) => {
//     try {
//       const newCardData = req.body;
//       const newCard = await CardModel.create(newCardData);
//       res.send({
//         success: 1,
//         data: newCard,
//       });
//     } catch (error) {
//       res.status(400).send({
//         success: 0,
//         data: null,
//         message: err.message || "null",
//       });
//     }
//   });

//   app.put("api/cards/:cardId", (req, res) => {
//     try {
//       const { cardId } = req.params;
//       const updateCardData = req.body;

//       const updatedCard = await CardModel.findByIdAndUpdate(
//         cardId,
//         updateCardData,
//         { new: true }
//       );

//       const updatedCard = await CardModel.findOneAndUpdate(
//         { _id: cardId },
//         updateCardData,
//         { new: true }
//       );
//       res.send({
//         success: 1,
//         data: newCard,
//       });
//     } catch (error) {
//       res.status(400).send({
//         success: 0,
//         data: null,
//         message: err.message || "null",
//       });
//     }
//   });

//   app.listen(9000, (err) => {
//     if (err) throw err;

//     console.log("server connected");
//   });
// }

// main();
