const UserController = require('../controllers/user.controllers')
const { authenticate } = require('../config/jwt.config')
const { addUser, getAllUsers, getOneUser, updateUser, deleteUser } = UserController

module.exports = (app) => {
    //get all Users
    app.get('/api/allUsers', authenticate, getAllUsers)
    //get one User
    app.get('/api/findById/:id', authenticate, getOneUser)
    //create a new User
    app.post('/api/addUser', authenticate, addUser)
    //update User
    app.put('/api/update/:id', authenticate, updateUser)
    //delete User
    app.delete('/api/delete/:id', authenticate, deleteUser)
}