exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, name: "flyers", description: "" },
        { id: 2, name: "tape", description: "duct tape" },
        { id: 3, name: "notes", description: "old project notes" },
        { id: 4, name: "coffee", description: "" }
      ]);
    });
};
