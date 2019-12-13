const express = require("express");

const Tasks = require("./tasks-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      if (tasks) {
        res.status(200).json(tasks);
      } else {
        res.status(404).json("No tasks to retrieve");
      }
    })
    .catch(error => {
      res.status(500).json("Error retrieving tasks from database");
    });
});

router.post("/", validateTask, (req, res) => {
  Tasks.addTask(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(error => {
      res.status(500).json({
        message: "Error retrieving task"
      });
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Could not add task to database", error: error });
    });
});

// Task Middleware
function validateTask(req, res, next) {
  const { project_id, description } = req.body;
  if (project_id && description) {
    next();
  } else {
    res.status(400).json({
      message: "Please provide a project id and description for the task"
    });
  }
}

module.exports = router;
