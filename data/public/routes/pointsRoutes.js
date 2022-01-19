"use strict";

var Router = require('express-promise-router');

var pointcontroller = require('../points/controller');

var router = new Router();
router.get('/', pointcontroller.getPoint);
router.post('/', pointcontroller.addPoint);
router.get('/:id', pointcontroller.getPointById);
router.put('/:id', pointcontroller.updatePointId);
router.delete('/:id', pointcontroller.removePointById);
module.exports = router;