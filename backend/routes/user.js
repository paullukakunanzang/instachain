const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/user')

router.route('/')
    .get(controller.getAllUsers)
    .post(controller.signup)


router.route('/login')
    .post(controller.login)    

router.route('/:id')
    .get()

router.route('/:id/update-balance')
    .patch(controller.updateUserBalance)

module.exports = router;