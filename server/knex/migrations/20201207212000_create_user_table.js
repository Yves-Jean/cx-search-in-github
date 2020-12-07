const content = require("../../data/user.schema.json");

exports.up = function (knex) {
  return knex.schema.dropTableIfExists("users").then(() => {
    return knex.schema.createTable("users", (table) => {
      Object.keys(content).forEach((column) => {
        if (column === "id") {
          table.integer(column, 11).primary();
          return;
        }
        table.string(column).nullable();
      });
    });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
