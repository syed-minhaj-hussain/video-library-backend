const express = require("express");
const router = express.Router();

const { authVerify } = require("../middlewares/authVerify");
const {
  getLikedVideoController,
  postLikedVideoController,
  deleteLikedVideoController,
} = require("../controllers/likedVideos.controller");

// router.use("/", authVerify);

router
  .route("/")
  .get(authVerify, getLikedVideoController)
  .post(authVerify, postLikedVideoController);

router.route("/:likedVideoId").delete(authVerify, deleteLikedVideoController);

module.exports = { router };
