exports.up = function(knex) {
  return knex.schema.dropTable("projects_resources");
};

exports.down = function(knex) {};
