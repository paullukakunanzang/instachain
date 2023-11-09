const express = require('express'),
    router = express.Router(),
    controllers = require('../controllers/transaction') 

router.route('/')
    .get(controllers.getAllTransactions)
    .post(controllers.createTransaction)

router.route('/verify')
    .get(controllers.getTransactionByCode)

router.route('/:id')
    .get(controllers.getTransactionById)

router.route('/:userId')
    .get(controllers.getTransactionsByUserId)


module.exports = router;