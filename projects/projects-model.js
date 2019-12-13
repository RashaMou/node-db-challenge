const db = require("../data/db-config");

module.exports = {
  getProjects,
  findProjectById,
  addProject,
  getResources
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

async function addProject(project) {
  const [id] = await db("projects").insert(project);
  return findProjectById(id);
}

// function addProject(project) {
//   db("projects")
//     .insert(project)
//     .then(ids => {
//       return findProjectById(ids[0]);
//     });
// }

function getResources(id) {
  return db("resources").where((id = "project_id"));
}
