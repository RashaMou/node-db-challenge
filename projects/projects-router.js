const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  // convert boolean
  const projects = await Projects.getProjects();
  try {
    if (projects) {
      res.status(200).json(projects);
    } else res.status(404).json("No projects to retrieve");
  } catch (err) {
    res.status(500).json("error retrieving projects");
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.findProjectById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get project" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;
  Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

module.exports = router;
