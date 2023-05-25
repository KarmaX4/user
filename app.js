const express = require('express')
const mongoose = require('mongoose');
const controllers = require('./controllers/productController')

const app = express()
var cors = require('cors')

app.use(express.json())

app.use(cors())

app.listen(7000, () => {
    console.log("server is running");
})

app.post('/adduser',controllers.addUser)

app.get('/users',controllers.getUsers)

app.get('/user/:id', controllers.getUser)

app.post('/user/:id', controllers.updateUser)

app.post('/remove/:id',controllers.removeUser)

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://ravipearlsit:pearls123@cluster0.ke68w5d.mongodb.net/Crud-api?retryWrites=true&w=majority')
    .then(() => console.log('DB is Connected!'));  