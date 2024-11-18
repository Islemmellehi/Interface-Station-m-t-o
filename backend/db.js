const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'UsersWeather',
  password: 'peepeepoopoo',
  port: 5432,
});

module.exports = pool;
