const { Router } = require('express')
const polecontroller = require('../Pole/controller')

const router = Router();

router.get('/', polecontroller.getPole);
// // router.post('/', polecontroller.getPoleById);
// // router.get('/:id', usercontroller.getUsersById);
// // router.put('/:id', usercontroller.updateUsersId);
// // router.delete('/:id', usercontroller.removeUsersById);


module.exports = router;
