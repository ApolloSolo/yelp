const Pool = require("pg").Pool;

const db = new Pool({
  user: "postgres",
  password: "BAIley!@#$1234",
  host: "localhost",
  database: "yelp",
  port: 5432,
});

module.exports = db;
