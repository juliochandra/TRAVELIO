/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const userId = [
  '760a2087-f3d1-477d-8fc0-3118c71667b5',
  '760a2087-ab53-4080-9444-4c7c3599fd45'
];
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('user').insert([
    {
      id: userId[0],
      name: 'julio chandra',
      email: 'juliochandra@gmail.com',
      password: '$2b$12$hOGED6E3GePFtuvQepoOyOesqnk4Jc2rL7BDRJMcnR6SO0RhCW9Lu'
    },
    {
      id: userId[1],
      name: 'chandra julio',
      email: 'chandrajulio@gmail.com',
      password:
        '$2b$12$$2b$12$6v2W6XVCOpNwt/wtr.FCgeWxEa6AYxE0JPpWSI2KXHLu3b/lnw58e.pm'
    }
  ]);
};
