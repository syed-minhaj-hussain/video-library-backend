const express = require("express");
const cors = require("cors");
const { startConnection } = require("./db.connect");
require("dotenv").config();

const { router: videosRouter } = require("./routes/videos.router");
const { router: signInRouter } = require("./routes/login.router");
const { router: signUpRouter } = require("./routes/register.router");
const { router: historyRouter } = require("./routes/history.router");
const { router: playlistRouter } = require("./routes/playlist.router");
const { router: likedVideosRouter } = require("./routes/likedVideos.router");
const { router: watchLaterRouter } = require("./routes/watchLater.router");
const { routeNotFound } = require("./middlewares/route-not-found");
const { errorHandler } = require("./middlewares/error-handler");

const app = express();
const PORT = process.env.PORT || 8080;

startConnection();

app.use(cors());
app.use(express.json());

app.use("/videos", videosRouter);
app.use("/login", signInRouter);
app.use("/register", signUpRouter);
app.use("/history", historyRouter);
app.use("/playist", playlistRouter);
app.use("/likedVideos", likedVideosRouter);
app.use("/watchLater", watchLaterRouter);

app.get("/", (req, res) => res.json("Hello World"));

/**
 * Do not move : (404 Route-Not-Found) Handler.
 */
app.use(routeNotFound);
/**
 * Error-Handler Middleware.
 */
app.use(errorHandler);

app.listen(PORT, () => console.log(`server started at PORT : ${PORT}`));
