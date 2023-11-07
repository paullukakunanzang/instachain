const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    transactionType: {type: String},
    amount: {type: Number, default: 0},
    wallet: {type: String},
    createdBy: {type: mongoose.Types.ObjectId}

}, {timestamps: true})


const Transactions = mongoose.model('transaction', transactionSchema)

module.exports = Transactions;
