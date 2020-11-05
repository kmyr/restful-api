const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
require('dotenv/config')


app.use(bodyParser.json())

//import routes
const postsRoute = require('./routes/posts')
app.use('/posts',postsRoute)

//connect to db
mongoose.connect(process.env.DB_CONNECTION,{},()=> {
    console.log('connected to DB!');
})


//start listening to the server

app.listen(3000)









//get
//post
//patch
//delete