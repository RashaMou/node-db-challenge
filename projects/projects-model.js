const db = require("../data/db-config");

module.exports = {
  getProjects,
  findProjectById,
  addProject
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

// select
//     id as resourceId,
//     name as resourcename,
//     description as resourcedesc
// from resources
// join projects_resources as pr on resources.id = pr.resource_id
// join projects on pr.project_id = projects.id
// where projects.id = 1

// function getResources(projectId) {
//   return db
//     .from("resources")
//     .select("*")
//     .join(
//       "projects_resources",
//       "resources.id",
//       "=",
//       "projects_resources.resource_id"
//     )
//     .join("projects", "projects_resources.id", "=", "projects.id")
//     .where("projects.id", projectId)
//     .first();
// }
