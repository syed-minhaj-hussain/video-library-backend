const express = require("express");
const router = express.Router();

const { authVerify } = require("../middlewares/authVerify");
const { findVideoById } = require("../middlewares/findVideoById");
const {
  getVideosController,
  postVideosController,
  getSpecificVideoController,
  updateSpecificVideoController,
  deleteSpecificVideoController,
} = require("../controllers/videos.controllers");

router
  .route("/")
  .get(getVideosController)
  .post(authVerify, postVideosController);

router.param("videoId", findVideoById);
router
  .route("/:videoId")
  .get(getSpecificVideoController)
  .post(authVerify, updateSpecificVideoController)
  .delete(authVerify, deleteSpecificVideoController);

module.exports = { router };
