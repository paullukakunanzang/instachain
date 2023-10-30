const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/user')

router.route('/')
    .get(controller.getAllUsers)
    .post(controller.signup)

router.route('/:id')
    .get()

router.route('/:userId')
    .get()

router.route(`/:userId/:id`)
    .get()

module.exports = router;