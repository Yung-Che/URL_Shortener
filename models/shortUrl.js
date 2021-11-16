const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const shortUrlSchema = new Schema({
  fullUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true,
    default: shortId.generate
  }
})

module.exports = mongoose.model('shortUrl', shortUrlSchema)