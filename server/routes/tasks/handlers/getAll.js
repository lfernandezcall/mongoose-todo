const Task = require('../../../models/Task')

function getAll (req, res) {
  Task.find()
    .then(data => {
      res.render('index', { data })
    })
}

module.exports = getAll
