const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name cannot be empty! ",
      trim: true,
    },
    duration: {
      type: String,
      required: "duration cannot be empty / null",
    },
    url: {
      type: String,
      required: "url cannot be empty",
    },
    channel: {
      type: String,
      required: "channel cannot be empty / null",
    },
    logo: {
      type: String,
      required: "Please Add Logo",
    },
    thumbnail: {
      type: String,
      required: "Please Add Thumbnail",
    },
    intro: {
      type: String,
      trim: true,
      required: "Give Some Intro About Video!",
      minlength: 25,
    },
    verified: {
      type: Boolean,
      required: "Please Add This Field",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Video = mongoose.model("Video", VideoSchema);

module.exports = { Video };
