const { Video } = require("../models/video.model");

const findVideoById = async (req, res, next, videoId) => {
  try {
    const video = await Video.findById(videoId);
    if (!video) {
      return res
        .status(400)
        .json({ success: false, message: "video Not Found" });
    }
    req.video = video;
    next();
  } catch (err) {
    res.status(400).json({ success: false, message: "video Not Found" });
  }
};

module.exports = { findVideoById };
