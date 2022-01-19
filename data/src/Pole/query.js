
const getPole = "SELECT * FROM public.Pole"; 

// // SELECT row_to_json(f) As feature FROM (SELECT * , ST_AsGeoJSON(geom)::json As geometry, row_to_json((SELECT l FROM (SELECT device_id AS device_id) As l)) As properties FROM public."Pole") As f'
// // // // const getPoleById = "SELECT * FROM Pole WHERE id = $1";
// // const checkEmail = "SELECT s FROM users s WHERE s.email = $1";
// // const addUsers = "INSERT INTO users (name, email, password, date) VALUES ($1, $2, $3, $4)";
// // const removeUsers = "DELETE FROM users where id = $1";
// // const updateUsers = "UPDATE users SET name = $1 WHERE id = $2";

module.exports = {
    getPole,
    // // getPoleByIdK
}
