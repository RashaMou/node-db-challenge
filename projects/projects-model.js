const db = require("../data/db-config");

module.exports = {
  getProjects,
  findProjectById,
  addProject
  // getResources
  // addResource,
  // addTask,
  // getTasks
};

function getProjects() {
  return db("projects");
}

function findProjectById(id) {
  return db("projects").then(project => {
    if (!id) {
      return null;
    } else {
      return db("projects")
        .where({ id })
        .first();
    }
  });
}

function addProject(project) {
  return db("projects")
    .insert(project, "id")
    .then(newId => {
      const [id] = newId;
      return findById(id);
    });
}
