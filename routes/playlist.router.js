const express = require("express");
const router = express.Router();

const { authVerify } = require("../middlewares/authVerify");
const {
  getPlaylistController,
  postPlaylistController,
} = require("../controllers/playlist.controllers");

router.use("/", authVerify);

router.route("/").get(getPlaylistController).post(postPlaylistController);

module.exports = { router };
