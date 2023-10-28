const express = require('express'),
    router = express.Router()

router.route('/')
    .get()
    .post()

router.route('/:id')

router.route('/:userId')
    .get()

router.route(`/:userId/:id`)
    .get()

router.route('/id')