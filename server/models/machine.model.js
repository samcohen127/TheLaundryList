const mongoose = require('mongoose')

const MachineSchema = mongoose.Schema({
    year: {
        type: Number,
    },
    manufacturer: {
        type: String,
        required: [true, 'Manufacturer is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    modelNumber: {
        type: String,
    },
    serialNumber: {
        type: String,
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: [
            'washers',
            'batchWashers',
            'dryers',
            'ironers',
            'flatwork',
            'garmentTunnels',
            'materialHandling',
            'airCompressors',
            'Documentary',
            'boilers',
            'wastewater',
            'misc',
            'carts'
        ]
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
    voltage: {
        type: String,
    },
    owner: {
        type: String,
        required: [true, 'Owner is required']
    },
    contact: {
        type: String,
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    highLow: {
        type: String,
        required: [true, 'Asking Price is required']
    },
    // image: {
    //     type: String,
    //     required: [true, 'Please add one image']
    // }

}, { timestamps: true })

const Machine = mongoose.model('Machine', MachineSchema)

module.exports = Machine
