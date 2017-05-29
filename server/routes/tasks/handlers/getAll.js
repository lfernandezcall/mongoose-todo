const Task = require('../../../models/task')

function getAll (req, res) {
  Task.find()
    .then(data => {
      res.render('index', { data })
    })
}

module.exports = getAll
