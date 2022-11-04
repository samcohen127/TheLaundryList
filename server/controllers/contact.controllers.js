const Contact = require('../models/contact.model')

module.exports = {
    getAllContacts: (req, res) => {
        Contact.find()
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    getOneContact: (req, res) => {
        Contact.findById(req.params.id)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    addContact: (req, res) => {
        Contact.create(req.body.obj)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    updateContact: (req, res) => {
        Contact.updateOne({ _id: req.params.id }, req.body.obj, { new: true, runValidators: true })
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },

    deleteContact: (req, res) => {
        Contact.remove({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    }
}
