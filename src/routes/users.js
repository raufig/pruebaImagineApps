const { Router } = require('express');

const router = Router();


const UsersController = require('../controllers/users_controller');

router.post('/create', UsersController.createUser)
router.put('/update', UsersController.updateProducts)

module.exports = router;