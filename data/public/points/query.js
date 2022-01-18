"use strict";

var getPoint = "SELECT * FROM gis.point1_gen";
var getPointById = "SELECT * FROM gis.point1_gen WHERE id_0 = $1";
var checkCoordinat = "SELECT s FROM gis.point1_gen s WHERE (s.x , s.y) = ($1, $2)";
var addPoint = "INSERT INTO gis.point1_gen (geom, x, y) VALUES ($1, $2, $3)";
var removePoint = "DELETE FROM gis.point1_gen where id_0 = $1";
var updatePoint = "UPDATE gis.point1_gen SET (x, y) = ($1, $2) WHERE id_0 = $3";
module.exports = {
  getPoint,
  getPointById,
  checkCoordinat,
  addPoint,
  removePoint,
  updatePoint
};