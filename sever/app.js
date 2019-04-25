// modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

var indexRouter = require('./routes/index');

// connect database
mongoose.connect('mongodb://localhost/ATG', { useNewUrlParser: true })

// create server
const app = express()

// config middleware
app.use(bodyParser.json())
app.use(cors())

// routes
app.use('/', indexRouter);


// run server
app.listen(4000, () => console.log('Server is running on port 5000'))
module.exports = app;
