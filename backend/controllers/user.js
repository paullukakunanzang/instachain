require('dotenv').config()
const User = require('../models/user'),
    jwt = require('jsonwebtoken')

    const createToken = (_id) => {
        return jwt.sign({_id: _id}, process.env.SECRET_KEY, {expiresIn: '1d'})
    }
    
    exports.getAllUsers = async (req, res) => {
        try {
    
            const response = await User.find({})
            return res.status(200).json({message: 'success', data: response})
            
        } catch (error) {
            return res.status(400).json({message: 'error', error: error.message})
        }
    }
    
    exports.signup = async (req, res) => {
        try {
            const {email, password} = req.body 
            
            const user = await User.signup(email, password)
    
            const token = createToken(user._id)
    
            return res.status(201).json({message: 'success', data: user, token})
    
        } catch (error) {
            return res.status(400).json({message: 'error', error: error.message})
        }
    }
    
    exports.login = async (req, res) => {
        try {
            const {email, password} = req.body
    
             const user = await User.login(email, password)
    
            // create a token
            const token = createToken(user._id)
    
            return res.status(200).json({message: 'success', data: user, token})        
        } catch (error) {
            return res.status(400).json({message: 'error', error: error.message})
        }
    }

module.exports = exports;