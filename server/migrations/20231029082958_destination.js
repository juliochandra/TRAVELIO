/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("destination", table => {
    table
      .uuid("id")
      .primary()
      .defaultTo(knex.raw("uuid_generate_v4()"));
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at");
    table
      .uuid("user_id")
      .references("id")
      .inTable("user");
    table.string("name");
    table.string("location");
    table.text("description");
    table.string("image");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("destination");
};
