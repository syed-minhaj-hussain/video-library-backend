const express = require("express");
const router = express.Router();

const { authVerify } = require("../middlewares/authVerify");
const {
  getLikedVideoController,
  postLikedVideoController,
  deleteLikedVideoController,
} = require("../controllers/likedVideos.controller");

router.use("/", authVerify);

router.route("/").get(getLikedVideoController).post(postLikedVideoController);

router.route("/:likedVideoId").delete(deleteLikedVideoController);

module.exports = { router };
