const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await Projects.getProjects();
  try {
    if (projects) {
      res.status(200).json(
        projects.map(project => {
          return {
            ...project,
            completed: project.completed === 1 ? true : false
          };
        })
      );
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

router.post("/", validateProject, async (req, res) => {
  const newProject = await Projects.addProject(req.body);
  try {
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json("I am not working");
  }
});

//Projects Middleware
function validateProject(req, res, next) {
  const { name } = req.body;
  if (name) {
    next();
  } else {
    res.status(400).json({
      message: "Please provide a name for the project"
    });
  }
}

module.exports = router;
