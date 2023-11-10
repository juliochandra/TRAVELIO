/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema.createTable('destination', table => {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table
      .uuid('user_id')
      .references('id')
      .inTable('user');
    table.string('name').notNullable();
    table.string('location').notNullable();
    table.text('description').notNullable();
    table
      .string('image')
      .defaultTo(
        'https://res.cloudinary.com/dsh5ppscb/image/upload/v1699170463/Binar/yqaqobef53hwkzvg4hpv.jpg'
      )
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('destination');
};
