const { WatchLater } = require("../models/watchLater.model");

const getWatchLaterController = async (req, res) => {
  const {
    user: { _id },
  } = req;
  try {
    const watchLater = await WatchLater.find({ user: _id });

    res.status(200).json({ success: true, watchLater });
  } catch (err) {
    res.status(404).json({ success: false, message: "Liked Video Not Found" });
  }
};

const postWatchLaterController = async (req, res) => {
  const {
    user: { _id },
  } = req;
  const watchLater = req.body;
  try {
    if (watchLater) {
      const itemCreated = new WatchLater({ ...watchLater, user: _id });
      const saveItemCreated = await itemCreated.save();
      res.status(200).json({
        success: true,
        saveItemCreated,
        message: "Item Added To WatchLater",
      });
    }
  } catch (err) {
    res.status(404).json({ success: false, message: "WishItem Not Found" });
  }
};

const deleteWatchLaterController = async (req, res) => {
  const { watchLaterId } = req.params;
  const { user: watchLaterUser } = req;
  try {
    await WatchLater.remove({
      _id: watchLaterId,
      user: watchLaterUser._id,
    });
    res
      .status(200)
      .json({ success: true, message: "Video Removed Successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Something Went Wrong" });
  }
};

module.exports = {
  getWatchLaterController,
  postWatchLaterController,
  deleteWatchLaterController,
};
