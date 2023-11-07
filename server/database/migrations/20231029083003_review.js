/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const image =
  'https://res.cloudinary.com/dsh5ppscb/image/upload/v1699170463/Binar/yqaqobef53hwkzvg4hpv.jpg';
exports.up = function(knex) {
  return knex.schema.createTable('review', table => {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at');
    table
      .uuid('user_id')
      .references('id')
      .inTable('user');
    table
      .uuid('destination_id')
      .references('id')
      .inTable('destination');
    table.text('review');
    table.integer('rating');
    table.string('image').defaultTo(image);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('review');
};
