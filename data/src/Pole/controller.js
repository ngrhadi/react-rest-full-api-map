const { parse } = require('pg-protocol');
const pool = require('../../database/db-points');
const queries = require('./query');

const getPole = async (req, res) => {
    await req.pool(queries.getPole, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

// // const getPoleById = (req, res) => {
// //     const id = parseInt(req.params.id);
// //     pool.query(queries.getPoleById, [id], (error, results) => {
// //         if (error) throw error;
// //         res.status(200).json(results.rows);
// //     })
// // }

// // const addUsers = (req, res) => {
// //     const {name, email, password, date} = req.body;

// //     //check
// //     pool.query(queries.checkEmail, [email], (error, results) => {
// //         if (results.rows.length) {
// //                 res.send("email already exists")
// //         }

// //         //add user
// //         pool.query(queries.addUsers, 
// //             [name, email, password, date], 
// //             (error, results) =>{
// //                 if (error) throw error; 
// //                 res.status(201).send("User has been created")
// //         })
// //     })
// // }

// // const removeUsersById = (req, res) => {
// //     const id = parseInt(req.params.id);
// //     pool.query(queries.getUsersById, [id], (error, results) => {
// //         const noUsers = !results.rows.length;
// //         if (noUsers) {
// //             res.send("user has nothing")
// //         }

// //         pool.query(queries.removeUsers, [id], (error, results) =>{
// //             if (error) throw error;
// //             res.status(200).send('user has been deteled')
// //         })
// //     })
// // }

// // const updateUsersId = (req, res) => {
// //     const id = parseInt(req.params.id)
// //     const {name} = req.body;

// //     pool.query(queries.getUsersById, [id], (error, results) => {
// //         const noUsers = !results.rows.length;
// //         if (noUsers) {
// //             res.send("user has nothing");
// //         }

// //         pool.query(queries.updateUsers, [name, id], (error, results) => {
// //             if (error) throw error;
// //             res.status(200).send('users has been updated');
// //         })
// //     })

// // }

module.exports = {
    getPole,
    // // getPoleById
    // // addUsers,
    // // removeUsersById,
    // // updateUsersId,
}
