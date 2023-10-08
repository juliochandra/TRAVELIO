const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const { HOST, PORT, USER, PASSWORD, DATABASE } = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: HOST,
      port: PORT,
      user: USER,
      password: PASSWORD,
      database: DATABASE,
    },
    pool: {
      min: 2, // Minimum number of connections in the pool
      max: 10, // Maximum number of connections in the pool
    },
  },
};
