const Machine = require('../models/machine.model')

module.exports = {
    getAllMachines: (req, res) => {
        Machine.find()
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    getOneMachine: (req, res) => {
        Machine.findById(req.params.id)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    addMachine: (req, res) => {
        Machine.create(req.body.initialState) //initialState
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    updateMachine: (req, res) => {
        Machine.updateOne({ _id: req.params.id }, req.body.obj, { new: true, runValidators: true })
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },

    deleteMachine: (req, res) => {
        Machine.remove({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    }
}
