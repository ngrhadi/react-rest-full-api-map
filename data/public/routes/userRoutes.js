"use strict";

var {
  Router
} = require('express');

var usercontroller = require('../users/controller');

var router = Router();
router.get('/', usercontroller.getUsers);
router.post('/', usercontroller.addUsers);
router.get('/:id', usercontroller.getUsersById);
router.put('/:id', usercontroller.updateUsersId);
router.delete('/:id', usercontroller.removeUsersById);
module.exports = router;