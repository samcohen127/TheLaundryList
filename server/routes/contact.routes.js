const ContactController = require('../controllers/contact.controllers')
// const { authenticate } = require('../config/jwt.config')
const { addContact, getAllContacts, getOneContact, updateContact, deleteContact } = ContactController

module.exports = (app) => {
    //get all Contacts
    // app.get('/api/allContacts', getAllContacts)
    // //get one Contact
    // app.get('/api/findById/:id', getOneContact)
    //create a new Contact
    app.post('/api/addContact', addContact)
    //update Contact
    // app.put('/api/update/:id', updateContact)
    // //delete Contact
    // app.delete('/api/delete/:id', deleteContact)
}