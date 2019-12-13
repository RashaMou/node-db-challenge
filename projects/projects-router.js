const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await Projects.getProjects();
  try {
    if (projects) {
      res.status(200).json(projects);
    } else res.status(404).json("No projects to retrieve");
  } catch (err) {
    res.status(500).json("error retrieving projects");
  }
});

module.exports = router;
