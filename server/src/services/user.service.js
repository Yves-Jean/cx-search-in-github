const knex = require("./knex/knex");

const getUser = (username) => {
  return knex("users").select().where("username", username);
};
const insertUser = (user) => {
  return knex("users").insert(user);
};
const updatetUser = (id, user) => {
  return knex("users").update(user).where("id", id);
};
const deletetUser = (id) => {
  return knex("users").delete().where("id", id);
};

module.exports = {
  getUser,
  insertUser,
  updatetUser,
  deletetUser,
};
