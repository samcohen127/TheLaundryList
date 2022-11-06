const MachineController = require('../controllers/machine.controllers')
// const { authenticate } = require('../config/jwt.config')
const { addMachine, getAllMachines, getOneMachine, updateMachine, deleteMachine } = MachineController
// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: "./public/uploads/",
//     filename: function (req, file, cb) {
//         cb(
//             null,
//             file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//         );
//     },
// });

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 10000000000 },
// });


module.exports = (app) => {
    //get all Machines
    app.get('/api/allMachines', getAllMachines)
    //get one Machine
    app.get('/api/findById/:id', getOneMachine)
    //create a new Machine
    app.post('/api/addMachine',  addMachine) //upload.single('image'),
    //update Machine
    app.put('/api/updateMachine/:id', updateMachine)
    //delete Machine
    app.delete('/api/delete/:id', deleteMachine)
}