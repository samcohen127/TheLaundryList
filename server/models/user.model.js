const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        // required: [true, 'Company is required'],
        // minLength: [2, "Please include at least 2 characters"],
    },
    email: {
        type: String,
        // required: [true, 'Email is required'],
        // validate: [
        //     /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        //     'Provided email is invalid'
        // ]
    },
    password: {
        type: String
    },
    
}, { timestamps: true })



UserSchema.pre('save', async function (next) {
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword
        next()
    } catch (error) {
        console.log('error in save', error)
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User