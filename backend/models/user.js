const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    email: {type: String, unique: true },
    password: {type: String},
    accountBalance: {type: Number, default: 0},
    isAdmin: {type: Boolean, default: false}
})

const User = mongoose.model('user', userSchema)

module.exports = User;