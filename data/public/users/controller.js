"use strict";

var {
  parse
} = require('pg-protocol');

var pool = require('../../database/db');

var queries = require('./query');

var getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

var getUsersById = (req, res) => {
  var id = parseInt(req.params.id);
  pool.query(queries.getUsersById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

var addUsers = (req, res) => {
  var {
    name,
    email,
    password,
    date
  } = req.body; //check

  pool.query(queries.checkEmail, [email], (error, results) => {
    if (results.rows.length) {
      res.send("email already exists");
    } //add user


    pool.query(queries.addUsers, [name, email, password, date], (error, results) => {
      if (error) throw error;
      res.status(201).send("User has been created");
    });
  });
};

var removeUsersById = (req, res) => {
  var id = parseInt(req.params.id);
  pool.query(queries.getUsersById, [id], (error, results) => {
    var noUsers = !results.rows.length;

    if (noUsers) {
      res.send("user has nothing");
    }

    pool.query(queries.removeUsers, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send('user has been deteled');
    });
  });
};

var updateUsersId = (req, res) => {
  var id = parseInt(req.params.id);
  var {
    name
  } = req.body;
  pool.query(queries.getUsersById, [id], (error, results) => {
    var noUsers = !results.rows.length;

    if (noUsers) {
      res.send("user has nothing");
    }

    pool.query(queries.updateUsers, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send('users has been updated');
    });
  });
};

module.exports = {
  getUsers,
  getUsersById,
  addUsers,
  removeUsersById,
  updateUsersId
};