exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          description: "Hang flyers",
          notes: "also put in mailboxes",
          completed: true,
          project_id: 1
        },
        {
          id: 2,
          description: "call vet",
          notes: "",
          completed: true,
          project_id: 1
        },
        {
          id: 3,
          description: "organize notes",
          notes: "use notes from modeling project",
          completed: true,
          project_id: 2
        },
        {
          id: 4,
          description: "make coffee",
          notes: "",
          completed: true,
          project_id: 2
        },
        {
          id: 5,
          description: "complete MVP",
          notes: "don't forget your commits",
          completed: false,
          project_id: 2
        }
      ]);
    });
};
