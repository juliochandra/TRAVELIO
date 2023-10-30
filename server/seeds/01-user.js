/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      id: "760a2087-f3d1-477d-8fc0-3118c71667b5",
      name: "julio",
      email: "juliochandra@gmail.com",
      password: "julio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt vehicula erat, eget egestas libero aliquet nec. Vivamus at augue euismod, feugiat.",
    },
  ]);
};
