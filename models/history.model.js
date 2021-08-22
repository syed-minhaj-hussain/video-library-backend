const mongoose = require("mongoose");
const { Schema } = mongoose;

const HistorySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    history: [],
  },
  { timestamps: { createdAt: "created_at" } }
);

const History = mongoose.model("History", HistorySchema);
module.exports = { History };
