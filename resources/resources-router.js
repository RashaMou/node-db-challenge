const express = require("express");

const Resources = require("./resources-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const allResources = await Resources.getResources();
  try {
    if (allResources) {
      res.status(200).json(allResources);
    } else res.status(404).json("No resources found");
  } catch (err) {
    res.status(500).json("Error retrieving resources");
  }
});

router.post("/", validateResource, async (req, res) => {
  const newResource = await Resources.addResource(req.body);

  try {
    if (newResource) {
      res.status(201).json(newResource);
    } else {
      res.status(404).json("could not find specified resource");
    }
  } catch (err) {
    res.status(500).json("error adding resource");
  }
});

// Resources Middleware
function validateResource(req, res, next) {
  const { name } = req.body;
  if (name) {
    next();
  } else {
    res.status(400).json({
      message: "Please provide a name for the resource"
    });
  }
}

module.exports = router;
