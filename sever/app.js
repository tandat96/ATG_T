const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

var indexRouter = require('./routes/index');


mongoose.connect('mongodb://localhost:27017/ATG', {useNewUrlParser: true});

// create server
const app = express()
// view engine setup
app.use(bodyParser.json())

app.use(cors())


app.use('/', indexRouter);



app.listen(4000, () => console.log('Server is running on port 5000'))


