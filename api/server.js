const express = require("express");

const ProjectsRouter = require("../projects/projects-router");
const ResourcesRouter = require("../resources/resources-router");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);

server.get("/", (req, res) => {
  res.send("API running");
});

module.exports = server;
