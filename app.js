const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())

//import routes
const postsRoute = require('./routes/computers-info')
app.use('/',postsRoute)



//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},(error)=> {
    if (error) {
        console.log(error);
    }
    console.log('connected to DB!');
})


//start listening to the server
app.listen(3000)









//get
//post
//patch
//delete