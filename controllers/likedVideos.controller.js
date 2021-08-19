const { LikedVideo } = require("../models/likedVideos.model");

const getLikedVideoController = async (req, res) => {
  const {
    user: { _id },
  } = req;
  try {
    const likedVideo = await LikedVideo.find({ user: _id });

    res.status(200).json({ success: true, likedVideo });
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
    }
  } catch (err) {
    res.status(404).json({ success: false, message: "Something Went Wrong!" });
  }
};

const deleteLikedVideoController = async (req, res) => {
  const { likedVideoId } = req.params;
  const { user: likedVideoUser } = req;
  try {
    await LikedVideo.remove({
      _id: likedVideoId,
      user: likedVideoUser._id,
    });
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
