var express = require('express')
var app = express()
var port = 8080
var Book = require("./api/models/bookModel")

var routes = require("./api/routes/bookRoutes")

routes(app)


app.listen(port)