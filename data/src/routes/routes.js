const { Router } = require('express')
const usercontroller = require('../users/controller')

const router = Router();

router.get('/', usercontroller.getUsers);
router.post('/', usercontroller.addUsers);
router.get('/:id', usercontroller.getUsersById);
router.put('/:id', usercontroller.updateUsersId);
router.delete('/:id', usercontroller.removeUsersById);

module.exports = router;
