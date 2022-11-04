const UserController = require('../controllers/user.controllers')
// const { authenticate } = require('../config/jwt.config')
const { addUser, getAllUsers, getOneUser, updateUser, deleteUser } = UserController

module.exports = (app) => {
    //get all Users
    app.get('/api/allUsers', getAllUsers)
    //get one User
    app.get('/api/findById/:id', getOneUser)
    //create a new User
    app.post('/api/addUser', addUser)
    //update User
    app.put('/api/update/:id', updateUser)
    //delete User
    app.delete('/api/delete/:id', deleteUser)
}