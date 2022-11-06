const PORT = 8001
const cors = require('cors')
const express = require('express')
const app = express()
require('dotenv').config()
const cookieParser = require('cookie-parser')


//require config file
require('./config/mongoose.config')

//Middleware for formatting and allowing POST requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//allows for cookies
app.use(cookieParser())

app.use(
    cors({
        origin: "http://localhost:3000", credentials: true
    }),
)

// import routes
require('./routes/machine.routes')(app)
require('./routes/contact.routes')(app)
require('./routes/user.routes')(app)

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})


