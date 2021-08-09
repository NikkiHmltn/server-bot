const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reminderSchema = new Schema({
    message: String,
    author: String,
})

module.exports = mongoose.model('Reminder', reminderSchema)