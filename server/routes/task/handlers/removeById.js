const Task = require('../../../models/Task')

function removeById (req, res) {
  const { id } = req.params

  Task.findByIdAndRemove(id)
    .then(
      res.status(200).send(`Item w/ ID: ${id} was removed succesfully`)
    )
}

module.exports = removeById
