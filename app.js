const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())

//import routes
const computerRoute = require('./routes/computers.action')
const stuffRoute = require('./routes/stuff.action')
app.use('/computers',computerRoute)
app.use('/stuff',stuffRoute)



//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},(error)=> {
    if (error) {
        console.log(error);
    }
    console.log('connected to DB!');
})


//start listening to the server
app.listen(process.env.PORT || 3000);

