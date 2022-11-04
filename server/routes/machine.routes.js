const MachineController = require('../controllers/machine.controllers')
// const { authenticate } = require('../config/jwt.config')
const { addMachine, getAllMachines, getOneMachine, updateMachine, deleteMachine } = MachineController

module.exports = (app) => {
    //get all Machines
    app.get('/api/allMachines', getAllMachines)
    //get one Machine
    app.get('/api/findById/:id', getOneMachine)
    //create a new Machine
    app.post('/api/addMachine', addMachine)
    //update Machine
    app.put('/api/update/:id', updateMachine)
    //delete Machine
    app.delete('/api/delete/:id', deleteMachine)
}