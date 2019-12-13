const db = require("../data/db-config");

module.exports = {
  getResources
  // addResource,
};

function getResources() {
  return db("resources");
}
