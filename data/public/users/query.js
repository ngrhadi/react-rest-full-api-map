"use strict";

var getUsers = "SELECT * FROM users";
var getUsersById = "SELECT * FROM users WHERE id = $1";
var checkEmail = "SELECT s FROM users s WHERE s.email = $1";
var addUsers = "INSERT INTO users (name, email, password, date) VALUES ($1, $2, $3, $4)";
var removeUsers = "DELETE FROM users where id = $1";
var updateUsers = "UPDATE users SET name = $1 WHERE id = $2";
module.exports = {
  getUsers,
  getUsersById,
  checkEmail,
  addUsers,
  removeUsers,
  updateUsers
};