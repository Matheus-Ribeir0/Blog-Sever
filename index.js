const express = require("express");
const app = express();
const cors = require("cors")
const router = express.Router();

app.use(express.json());
app.use(cors())

const db = require("./models");

const port = process.env.PORT || 3001
// Routers

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/ping", (req, res) => res.send("servidor online"));
app.listen(port, () => console.log("Server ready on port 3000."));

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const likesRouter = require("./routes/Likes");
app.use("/like", likesRouter);

db.sequelize.sync().then((res) => {
  app.listen(port, () => {
    res.send("Server online")
       console.log("Server running on port 3001");
  });
});