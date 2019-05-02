const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    firstName : { type: String, required: true },
    lastName  : { type: String, required: true },
    email  : { type: String },
    idNumber : { type: String, required: true },
    telephone  : { type: String, required: true },
    address  : { type: String },
    isCompleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('profiles', profileSchema)