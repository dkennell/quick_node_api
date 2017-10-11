'use strict' 
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var bookSchema = new Schema({
	title: String,
	author: String,
	summary: String
})

module.exports = mongoose.model('Books', 'bookSchema')