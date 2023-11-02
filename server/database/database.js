const knex = require('knex');
const knexConfig = require('../knexfile');

module.exports.db = knex(knexConfig.development);
