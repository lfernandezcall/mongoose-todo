const express = require('express')
const router = express.Router()

const addTask = require('./handlers/addTask')
const getAll = require('./handlers/getAll')

router.post('/', addTask)
router.get('/', getAll)

module.exports = router
