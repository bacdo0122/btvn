const mongoose = require("mongoose");
const ListSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
      default: 0,
    },
    archived: {
      type: Boolean,
      required: true,
      default: false,
    },
    boardId: [
      {
        type: String,
        ref: "boards",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tasks", ListSchema);
