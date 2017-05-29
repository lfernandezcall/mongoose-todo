const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

console.log(`Connecting to DB => ${process.env.DB_URI}`)
mongoose.promise = Promise
mongoose.connect(process.env.DB_URI)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(routerCheckCredentials)
app.use('/tasks', routerTasks)
app.use('/task', routerTask)

app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}`))
