const express = require('express')
const router = express.Router()

const checkCredentials = require('./handlers/checkCredentials')

router.use(checkCredentials)

module.exports = router
