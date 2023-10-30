/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("review").del();
  await knex("review").insert([
    {
      user_id: "760a2087-f3d1-477d-8fc0-3118c71667b5",
      destination_id: "2ba03e7c-d463-45fc-8d55-266443b84811",
      review:
        "A mesmerizing experience! Candi Borobudur is an architectural marvel, and the history behind it is captivating.",
      rating: 5,
    },
    {
      user_id: "760a2087-f3d1-477d-8fc0-3118c71667b5",
      destination_id: "2ba03e7c-d463-45fc-8d55-266443b84811",
      review:
        "The intricate carvings on each stone tell a story of their own. A must-visit for history and art enthusiasts.",
      rating: 5,
    },
    {
      user_id: "760a2087-f3d1-477d-8fc0-3118c71667b5",
      destination_id: "2ba03e7c-d463-45fc-8d55-266443b84811",
      review:
        "The sunrise view from Candi Borobudur is something I'll never forget. It's a spiritual and serene experience.",
      rating: 5,
    },
    {
      user_id: "760a2087-f3d1-477d-8fc0-3118c71667b5",
      destination_id: "2ba03e7c-d463-45fc-8d55-266443b84811",
      review:
        "Navigating through the different levels and corners of the temple was like traveling through time. Every stone has a story to tell.",
      rating: 4,
    },
    {
      user_id: "760a2087-f3d1-477d-8fc0-3118c71667b5",
      destination_id: "2ba03e7c-d463-45fc-8d55-266443b84811",
      review:
        "While the temple is magnificent, I wish there were more guides available to explain the history and significance of the reliefs.",
      rating: 4,
    },
  ]);
};
