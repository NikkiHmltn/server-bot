const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ficScrapeSchema = new Schema({
    author: String,
    linkHalf: String,
    postDate: String
})

module.exports = mongoose.model('FicScrape', ficScrapeSchema)