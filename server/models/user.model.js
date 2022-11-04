const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Company is required'],
        minLength: [2, "Please include at least 2 characters"],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: [
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            'Provided email is invalid'
        ]
    },
    type: {
        type: String,
        enum: [
            'admin', 'sales', 'other'
        ]
    },

    note: {
        type: String,
    },

}, { timestamps: true })

const User = mongoose.model('User', UserSchema)

module.exports = User
