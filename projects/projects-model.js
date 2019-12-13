const db = require("../data/db-config");

module.exports = {
  getProjects
  // addProject,
  // getResources,
  // addResource,
  // addTask,
  // getTasks
};

function getProjects() {
  return db("projects");
}
