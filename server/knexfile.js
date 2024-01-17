// Update with your config settings.
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const { CONNECTIONSTRING } = process.env;
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      connectionString: CONNECTIONSTRING,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }

  // staging: {
  //   client: 'pg',
  //   connection: {
  //     host: HOST,
  //     port: PORTDATABASE,
  //     user: USER,
  //     password: PASSWORD,
  //     database: DATABASE
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     directory: './database/migrations'
  //   },
  //   seeds: {
  //     directory: './database/seeds'
  //   }
  // }

  // production:  {
  //   client: 'pg',
  //   connection: {
  //     host: HOST,
  //     port: PORTDATABASE,
  //     user: USER,
  //     password: PASSWORD,
  //     database: DATABASE
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     directory: './database/migrations'
  //   },
  //   seeds: {
  //     directory: './database/seeds'
  //   }
  // }
};
