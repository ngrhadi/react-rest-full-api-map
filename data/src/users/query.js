const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id = $1";
const checkEmail = "SELECT s FROM users s WHERE s.email = $1";
const addUsers = "INSERT INTO users (name, email, password, date) VALUES ($1, $2, $3, $4)";
const removeUsers = "DELETE FROM users where id = $1";
const updateUsers = "UPDATE users SET name = $1 WHERE id = $2";

module.exports = {
    getUsers,
    getUsersById,
    checkEmail,
    addUsers,
    removeUsers,
    updateUsers,
}
