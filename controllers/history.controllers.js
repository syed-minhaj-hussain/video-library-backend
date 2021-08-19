const { History } = require("../models/history.model");

const getHistoryController = async (req, res) => {
  const {
    user: { _id },
  } = req;
  try {
    const history = await History.find({ user: _id });

    res.status(200).json({ success: true, history });
  } catch (err) {
    res.status(404).json({ success: false, message: "history Not Found" });
  }
};

const postHistoryController = async (req, res) => {
  const {
    user: { _id },
  } = req;
  const history = req.body;
  console.log({ history });
  try {
    if (history) {
      const savedHistory = await History.findOneAndUpdate(
        { user: _id },
        { history: history },
        { useFindAndModify: false },
        async (err, doc) => {
          console.log({ err });
          console.log({ doc });
          if (!doc) {
            const createHistory = new History({ user: _id, history: history });
            try {
              const saveHistory = await createHistory.save();
              res.status(200).json({ succes: true, saveHistory });
            } catch (err) {
              res
                .status(400)
                .json({ success: false, message: "Something Went Wrong" });
            }
          }
        }
      );
      res.status(200).json({ savedHistory });
    }
  } catch (err) {
    res.status(404).json({ success: false, message: "Video Not Found" });
  }
};

module.exports = {
  getHistoryController,
  postHistoryController,
};
