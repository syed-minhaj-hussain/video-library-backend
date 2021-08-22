const { extend } = require("lodash");

const { Video } = require("../models/video.model");

const getVideosController = async (req, res) => {
  try {
    const videos = await Video.find({});
    if (!videos) {
      return res
        .status(404)
        .json({ success: false, message: "videos not found" });
    }
    res.json({ videos });
  } catch (err) {
    res.status(400).json({ success: false, message: "videos not found" });
  }
};

const postVideosController = async (req, res) => {
  const newVideo = req.body;
  const video = new Video(newVideo);
  try {
    const savedVideo = await video.save();
    res.status(200).json({
      ...savedVideo,
      success: true,
      message: "Product Added Successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "product addition failed",
      errorMessage: err.message,
    });
  }
};

const getSpecificVideoController = (req, res) => {
  const { video } = req;
  console.log(video);
  res.json({ video });
};

const updateSpecificVideoController = async (req, res) => {
  let { video } = req;
  const updatedVideoDetail = req.body;
  try {
    video = extend(video, updatedVideoDetail);
    const updatedVideo = await video.save();
    return res.status(200).json({
      updatedVideo,
      success: true,
      message: "Product Updated Successfully",
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "products not found" });
  }
};

const deleteSpecificVideoController = async (req, res) => {
  let { video } = req;
  try {
    const deletedVideo = await video.remove();
    res.json({ success: true, message: "Product Successfully Deleted!" });
  } catch (err) {
    res.status(400).json({ success: false, message: "products not found" });
  }
};

module.exports = {
  getVideosController,
  postVideosController,
  getSpecificVideoController,
  updateSpecificVideoController,
  deleteSpecificVideoController,
};
