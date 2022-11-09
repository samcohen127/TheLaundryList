const UserController = require('../controllers/user.controllers')
const { authenticate } = require('../config/jwt.config')
const { registerUser, loginUser, logOutUser } = UserController

module.exports = (app) => {
    app.post('/api/register', registerUser)
    app.post('/api/login', loginUser)
    app.get('/api/logout', authenticate, logOutUser)
}