const db = require("../data/db-config");

module.exports = {
  getResources,
  addResource
};

function getResources() {
  return db("resources");
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(res => {
      const id = res[0];
      return db("resources")
        .where({ id })
        .first();
    });
}
