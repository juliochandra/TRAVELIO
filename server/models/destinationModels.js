const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

class Destination {
  // Fetch all destinations
  static async findAll() {
    try {
      return await db("destination").select("*");
    } catch (error) {
      throw error;
    }
  }

  // Fetch a single destination by ID
  static async findById(id) {
    try {
      const [destination] = await db("destination").where({ id });
      console.log(destination);
      return destination;
    } catch (error) {
      throw error;
    }
  }

  // Create a new destination
  static async create(data) {
    try {
      const [newDestination] = await db("destination")
        .insert(data)
        .returning("*");
      return newDestination;
    } catch (error) {
      throw error;
    }
  }

  // Update a destination by ID
  static async update(id, data) {
    try {
      const [updatedDestination] = await db("destination")
        .where({ id })
        .update(data)
        .returning("*");
      return updatedDestination;
    } catch (error) {
      throw error;
    }
  }

  // Delete a destination by ID
  static async delete(id) {
    try {
      await db("destination")
        .where({ id })
        .del();
      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Destination;
