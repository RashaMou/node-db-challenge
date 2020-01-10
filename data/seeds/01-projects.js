exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Find Karim",
          description: "Find lost cat",
          completed: true
        },
        {
          id: 2,
          name: "Finish sprint challenge",
          description: "",
          completed: false
        }
      ]);
    });
};
