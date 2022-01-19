const Router = require('express-promise-router')
const pointcontroller = require('../points/controller')

const router = new Router();

router.get('/', pointcontroller.getPoint);
router.post('/', pointcontroller.addPoint);
router.get('/:id', pointcontroller.getPointById);
router.put('/:id', pointcontroller.updatePointId);
router.delete('/:id', pointcontroller.removePointById);

module.exports = router;
