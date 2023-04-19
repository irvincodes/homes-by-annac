import express from "express";
const path = require("path"); // ?
const logger = require("morgan");
require("dotenv").config();
require("./config/database");

const adminsRouter = require("./routes/adminsRouter");
const membersRouter = require("./routes/membersRouter");
const newLaunchesRouter = require("./routes/newLaunchesRouter");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist"))); // ?

app.use("/api/admins", adminsRouter);
app.use("/api/members", membersRouter);
app.use("/api/newlaunches", newLaunchesRouter);

const port = 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
