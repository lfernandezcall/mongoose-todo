const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', 'server/views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const dbUrl = 'mongodb://localhost:27017/test'
const PORT = 3000

mongoose.promise = Promise
mongoose.connect(dbUrl)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(routerCheckCredentials)
app.use('/tasks', routerTasks)
app.use('/task', routerTask)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
