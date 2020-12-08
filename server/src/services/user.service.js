const knex = require("../../knex/knex");

const getUserById = (id) => {
  return knex("users").select().where("id", id);
};
const getUser = (username) => {
  return knex.select("*").from("users").where("login", username);
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
  getUserById,
  getUser,
  insertUser,
  updatetUser,
  deletetUser,
};
