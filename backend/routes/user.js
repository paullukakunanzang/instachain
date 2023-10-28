const express = require('express'),
    router = express.Router()

router.route('/')
    .get()
    .post()

router.route('/:id')
    .get()

router.route('/:userId')
    .get()

router.route(`/:userId/:id`)
    .get()

module.exports = router;