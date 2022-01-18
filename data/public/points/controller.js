"use strict";

var {
  parse
} = require('pg-protocol');

var pool = require('../../database/db-points');

var queries = require('./query');

var getPoint = (req, res) => {
  pool.query(queries.getPoint, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

var getPointById = (req, res) => {
  var id = parseInt(req.params.id);
  pool.query(queries.getPointById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

var addPoint = (req, res) => {
  var {
    geom,
    x,
    y
  } = req.body; //check

  pool.query(queries.checkCoordinat, [x, y], (error, results) => {
    if (results.rows.length) {
      res.send("coordinat already exists");
    } //add user


    pool.query(queries.addPoint, [geom, x, y], (error, results) => {
      if (error) throw error;
      res.status(201).send("point has been created");
    });
  });
};

var removePointById = (req, res) => {
  var id = parseInt(req.params.id);
  pool.query(queries.getPointById, [id], (error, results) => {
    var noPoint = !results.rows.length;

    if (noPoint) {
      res.send("point has nothing");
    }

    pool.query(queries.removePoint, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send('point has been deteled');
    });
  });
};

var updatePointId = (req, res) => {
  var id = parseInt(req.params.id);
  var {
    x,
    y
  } = req.body;
  pool.query(queries.getPointById, [id], (error, results) => {
    var noPoint = !results.rows.length;

    if (noPoint) {
      res.send("point has nothing");
    }

    pool.query(queries.updatePoint, [x, y], (error, results) => {
      if (error) throw error;
      res.status(200).send('users has been updated');
    });
  });
};

module.exports = {
  getPoint,
  getPointById,
  addPoint,
  removePointById,
  updatePointId
};