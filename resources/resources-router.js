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

module.exports = router;
