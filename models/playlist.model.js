const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlaylistSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    playlist: [],
  },
  { timestamps: { createdAt: "created_at" } }
);

const Playlist = mongoose.model("Playlist", PlaylistSchema);
module.exports = { Playlist };
