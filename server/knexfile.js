const dotenv = require("dotenv");
dotenv.config();

const {
  DATABASE_HOST: host,
  DATABASE_PORT,
  DATABASE_USER: user,
  DATABASE_PASS: password,
  DATABASE_NAME: database,
} = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host,
      port: parseInt(DATABASE_PORT, 10),
      user,
      password,
      database,
      charset: "utf8",
    },
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
    },
  },
};
