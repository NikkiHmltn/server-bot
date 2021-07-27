const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ficScrapeSchema = new Schema({
    title: String,
    author: String,
    linkHalf: String
})

module.exports = mongoose.model('FicScrape', ficScrapeSchema)