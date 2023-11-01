require('dotenv').config()
const Transactions = require('../models/transactions')


exports.getAllTransactions = async (req, res) => {
    try {
        
        const allTransactions = await Transactions.find({})
        return res.status(200).json({message: 'success', data: allTransactions})

    } catch (error) {
        return res.json({error: error.message, message: 'Couldnt find all transactions'})
    }
}

exports.createTransaction = async (req, res) => {
    try {

        const {type, amount} = req.body

        const newTransaction = await Transactions.create({type, amount})
        return res.status(201).json({message: 'Successs', data: newTransaction})
        
    } catch (error) {
        return res.json({error: error.message, message: 'An error occured while creating transaction'})
    }
}

exports.getTransactionById = async (req, res) => {
    try {
        
        const {id} = req.params

        const transaction = await Transactions.findById(id)
        return res.status(200).json({message: 'Success', data: transaction})

    } catch (error) {
        return res.json({error: error.message, message: 'error finding transaction'})
    }
}


exports.getTransactionsByUserId = async (req, res) => {
    try {
        
        const {userId} = req.params

        const transactions = await Transactions.find({}).sort({createdBy: userId})
        return res.status(200).json({message: 'success', data: transactions})

    } catch (error) {
        return res.json({error: error.message, message: 'error finding transaction'})
    }
}

module.exports = exports;