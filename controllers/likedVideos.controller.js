const { LikedVideo } = require("../models/likedVideos.model");

const getLikedVideoController = async (req, res) => {
  const {
    user: { _id },
  } = req;
  try {
    const likedVideos = await LikedVideo.find({ user: _id });

    res.status(200).json({ success: true, likedVideos });
  } catch (err) {
    res.status(404).json({ success: false, message: "Liked Video Not Found" });
  }
};

const postLikedVideoController = async (req, res) => {
  const {
    user: { _id },
  } = req;
  const likedVideo = req.body;
  try {
    if (likedVideo) {
      const itemCreated = new LikedVideo({ ...likedVideo, user: _id });
      const saveItemCreated = await itemCreated.save();
      res.status(200).json({
        success: true,
        saveItemCreated,
        message: "Video Added To Likes",
      });
      console.log({ likedVideo });
    }
  } catch (err) {
    res.status(404).json({ success: false, message: "Something Went Wrong!" });
  }
};

const deleteLikedVideoController = async (req, res) => {
  console.log("DELETE_LIKED_VIDEO", { params: req.params, user: req.user });
  const { likedVideoId } = req.params;
  const { user: likedVideoUser } = req;
  try {
    const deletedVideo = await LikedVideo.findOneAndDelete({
      _id: likedVideoId,
      user: likedVideoUser._id,
    });
    console.log("CHECK", { deletedVideo });
    if (!deletedVideo) {
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Video Removed Successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Something Went Wrong" });
  }
};

module.exports = {
  getLikedVideoController,
  postLikedVideoController,
  deleteLikedVideoController,
};
