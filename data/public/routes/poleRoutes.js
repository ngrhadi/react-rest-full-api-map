"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Router = require('express-promise-router');

var polecontroller = require('../Pole/controller');

var router = new Router();
router.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var getPole = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (req, res) {
        yield pool.query("SELECT * FROM public.Pole".getPole, (error, results) => {
          pending = false;
          if (error) throw error;
          res.status(200).json(results.rows[0]);
        });
        return getPole();
      });

      return function getPole(_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }();
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()); // // router.post('/', polecontroller.getPoleById);
// // router.get('/:id', usercontroller.getUsersById);
// // router.put('/:id', usercontroller.updateUsersId);
// // router.delete('/:id', usercontroller.removeUsersById);

module.exports = router;