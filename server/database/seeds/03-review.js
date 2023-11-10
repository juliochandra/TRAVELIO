/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const destinationId = '760a2087-f3d1-477d-8fc0-3118c71667b5';
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('review').del();
  await knex('review').insert([
    {
      user_id: '760a2087-f3d1-477d-8fc0-3118c71667b5',
      destination_id: destinationId,
      review:
        'A mesmerizing experience! Candi Borobudur is an architectural marvel, and the history behind it is captivating.',
      rating: 5
    },
    {
      user_id: '760a2087-ab53-4080-9444-4c7c3599fd45',
      destination_id: destinationId,
      review:
        'The intricate carvings on each stone tell a story of their own. A must-visit for history and art enthusiasts.',
      rating: 5
    },
    {
      user_id: '760a2087-ab53-4080-9444-4c7c3599fd45',
      destination_id: destinationId,
      review:
        "The sunrise view from Candi Borobudur is something I'll never forget. It's a spiritual and serene experience.",
      rating: 5
    },
    {
      user_id: '760a2087-f3d1-477d-8fc0-3118c71667b5',
      destination_id: destinationId,
      review:
        'Navigating through the different levels and corners of the temple was like traveling through time. Every stone has a story to tell.',
      rating: 4
    },
    {
      user_id: '760a2087-f3d1-477d-8fc0-3118c71667b5',
      destination_id: destinationId,
      review:
        'While the temple is magnificent, I wish there were more guides available to explain the history and significance of the reliefs.',
      rating: 4
    }
  ]);
};
