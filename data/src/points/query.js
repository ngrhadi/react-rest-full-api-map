const getPoint = "SELECT * FROM gis.point1_gen";
const getPointById = "SELECT * FROM gis.point1_gen WHERE id_0 = $1";
const checkCoordinat = "SELECT s FROM gis.point1_gen s WHERE (s.x , s.y) = ($1, $2)";
const addPoint = "INSERT INTO gis.point1_gen (geom, x, y) VALUES ($1, $2, $3)";
const removePoint = "DELETE FROM gis.point1_gen where id_0 = $1";
const updatePoint = "UPDATE gis.point1_gen SET (x, y) = ($1, $2) WHERE id_0 = $3";

module.exports = {
    getPoint,
    getPointById,
    checkCoordinat,
    addPoint,
    removePoint,
    updatePoint,
}
