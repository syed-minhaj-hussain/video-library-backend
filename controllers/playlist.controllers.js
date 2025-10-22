const { Playlist } = require("../models/playlist.model");

const getPlaylistController = async (req, res) => {
  const {
    user: { _id },
  } = req;
  try {
    const playlist = await Playlist.find({ user: _id });

    res.status(200).json(playlist);
  } catch (err) {
    res.status(404).json({ success: false, message: "Playlist Not Found" });
  }
};

const postPlaylistController = async (req, res) => {
  const {
    user: { _id },
  } = req;
  const playlist = req.body;
  console.log({ playlist });
  try {
    if (playlist) {
      /*
    With upsert: true, a new document is created if one isn't found.
    upsert:false means only update existing
    **/
      const options = { new: true, upsert: true };
      const savedPlaylist = await Playlist.findOneAndUpdate(
        { user: _id },
        { playlist: playlist },
        options
      );
      // async (err, doc) => {
      //   if (!doc) {
      //     const createPlaylist = new Playlist({
      //       user: _id,
      //       playlist: playlist,
      //     });
      //     try {
      //       const savePlaylist = await createPlaylist.save();
      //       res.status(200).json({ succes: true, savePlaylist });
      //     } catch (err) {
      //       res
      //         .status(400)
      //         .json({ success: false, message: "Something Went Wrong" });
      //     }
      //   }
      // }

      res.status(200).json({ savedPlaylist });
    }
  } catch (err) {
    res.status(404).json({ success: false, message: "Something Went Wrong" });
  }
};

module.exports = {
  getPlaylistController,
  postPlaylistController,
};
