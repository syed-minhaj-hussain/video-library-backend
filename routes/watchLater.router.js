const express = require("express");
const router = express.Router();

const { authVerify } = require("../middlewares/authVerify");
const {
  getWatchLaterController,
  postWatchLaterController,
  deleteWatchLaterController,
} = require("../controllers/watchLater.controller");

router.use("/", authVerify);

router.route("/").get(getWatchLaterController).post(postWatchLaterController);

router.route("/:watchLaterId").delete(deleteWatchLaterController);

module.exports = { router };
