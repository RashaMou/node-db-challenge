const express = require("express");

const ProjectsRouter = require("../projects/projects-router");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectsRouter);

server.get("/", (req, res) => {
  res.send("API running");
});

module.exports = server;
