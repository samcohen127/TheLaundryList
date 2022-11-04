const User = require('../models/user.model')

module.exports = {
    getAllUsers: (req, res) => {
        User.find()
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    getOneUser: (req, res) => {
        User.findById(req.params.id)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    addUser: (req, res) => {
        User.create(req.body.initialState) //initialState
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    updateUser: (req, res) => {
        User.updateOne({ _id: req.params.id }, req.body.obj, { new: true, runValidators: true })
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },

    deleteUser: (req, res) => {
        User.remove({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    }
}
