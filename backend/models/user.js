const mongoose = require('mongoose'),
    bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({

    email: {type: String, unique: true },
    password: {type: String},
    accountBalance: {type: Number, default: 0},
    isAdmin: {type: Boolean, default: false}
})

userSchema.statics.signup = async function (email, password) {

    if(!email || !password) {
        throw Error('All fields are required')
    }

    if(password.length < 8){
        throw Error('password must be atleast 8 characters long')
    }

    const exists = await this.findOne({email})

    if(exists) {
        throw Error ('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user
}


userSchema.statics.login = async function (email, password) {

    // validation
    if(!email || !password){
       throw Error('All fields must be filled')
   }

   const user = await this.findOne({email})

   if(!user){
       throw Error('Incorrect email')
   }

   const match = await bcrypt.compare(password, user.password)

   if(!match){
       throw Error('Incorrect password')
   }

   return user

}

const User = mongoose.model('user', userSchema)

module.exports = User;