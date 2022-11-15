const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
  displayName: {
    name: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Board", BoardSchema);
