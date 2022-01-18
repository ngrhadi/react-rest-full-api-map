const { Router } = require('express')
const pointcontroller = require('../points/controller')

const router = Router();

router.get('/', pointcontroller.getPoint);
router.post('/', pointcontroller.addPoint);
router.get('/:id', pointcontroller.getPointById);
router.put('/:id', pointcontroller.updatePointId);
router.delete('/:id', pointcontroller.removePointById);

module.exports = router;
