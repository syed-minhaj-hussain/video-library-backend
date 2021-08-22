const express = require("express");
const router = express.Router();

const { authVerify } = require("../middlewares/authVerify");
const {
  getHistoryController,
  postHistoryController,
} = require("../controllers/history.controllers");

// router.use("/", authVerify);
router
  .route("/")
  .get(authVerify, getHistoryController)
  .post(authVerify, postHistoryController);

module.exports = { router };
