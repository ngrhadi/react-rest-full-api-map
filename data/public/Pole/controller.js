"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var {
  parse
} = require('pg-protocol');

var pool = require('../../database/db-points');

var queries = require('./query');

var getPole = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    yield pool.query(queries.getPole, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  });

  return function getPole(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // // const getPoleById = (req, res) => {
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
  getPole // // getPoleById
  // // addUsers,
  // // removeUsersById,
  // // updateUsersId,

};