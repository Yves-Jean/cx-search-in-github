const contents = require("../../data/user.schema.json");
const keys = [];
const integerFields = [];
for (const key in contents) {
  if (!keys.includes(key)) {
    if (Number.isInteger(contents[key])) {
      integerFields.push(key);
    }
    keys.push(key);
  }
}

exports.up = function (knex) {
  return knex.schema.dropTableIfExists("users").then(() => {
    return knex.schema.createTable("users", (table) => {
      keys.forEach((column) => {
        if (integerFields.includes(column)) {
          if (column === "id") {
            table.integer(column, 11).primary();
            return;
          }
          table.integer(column, 11).nullable();
          return;
        }
        table.string(column, 500).nullable();
      });
    });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
