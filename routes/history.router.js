const express = require("express");
const router = express.Router();

const { authVerify } = require("../middlewares/authVerify");
const {
  getHistoryController,
  postHistoryController,
} = require("../controllers/history.controllers");

router.use("/", authVerify);
router.route("/").get(getHistoryController).post(postHistoryController);

module.exports = { router };

// new
("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjMGYwMTI1MjU0YzM2MjAwNDQwODYiLCJpYXQiOjE2MjkyMjg4MTYsImV4cCI6MTYyOTMxNTIxNn0.QoE6euVuPgBmcTHdA46a8ctFzUrlt-Bad-1Q0yAib2k");

// old
("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFiZmY4ZDU5MDUzMTJjNGM3NzI4NmIiLCJpYXQiOjE2MjkyMjY3ODYsImV4cCI6MTYyOTMxMzE4Nn0.Aq66AeDNRFm55RZZUapqGn_K4-S6ZBzr23Ylg3xXVXI");

// Video-library
("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMzA4OGQzNDdlYzI3MmM3OWRhYzUiLCJpYXQiOjE2MjkzMDMxODUsImV4cCI6MTYyOTM4OTU4NX0.rrkGqNuj-bXj2uiuHiNxurNdtJ3lX8CMpQp70E_f2NM");
