/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("review", (table) => {
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
    table
      .uuid("destination_id")
      .references("id")
      .inTable("destination");
    table.text("review");
    table.integer("rating");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("review");
};
