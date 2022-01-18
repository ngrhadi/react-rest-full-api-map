const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "test_point",
    password: "postgres",
    port: 5432,
})

module.exports = pool;
