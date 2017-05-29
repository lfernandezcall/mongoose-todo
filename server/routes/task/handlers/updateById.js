const Task = require('../../../models/Task')

function updateById (req, res) {
  const { id } = req.params
  const { title } = req.body

  const updateData = {}
  if (title) updateData.title = title
  // if (completed) updateData.completed = completed
  updateData.modifiedDate = +new Date()

  Task.findByIdAndUpdate(id, updateData)
    .then(
      res.status(200).send(`Item w/ ID: ${id} was updated succesfully, w/ this title ${updateData.title} `)
    )
}

module.exports = updateById
