const Task = require('../../../models/task')

function addTask (req, res) {
  const { title } = req.body

  const newTask = new Task({ title })

  newTask.save()
    .then(
      res.redirect('/tasks')
    )
}

module.exports = addTask
