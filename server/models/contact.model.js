const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Company is required'],
        minLength: [2, "Please include at least 2 characters"],
    },
    company: {
        type: String,
        required: [true, 'Company is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: [
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            'Provided email is invalid'
        ]
    },
    phone: {
        type: String,
        validate: [
            /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
            'Provided phone number is invalid.'
        ]
    },
    // regex validation: ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$

    note: {
        type: String,
    },

}, { timestamps: true })

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
