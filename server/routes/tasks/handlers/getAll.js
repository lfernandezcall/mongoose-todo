const Task = require('../../../models/Task')

function getAll (req, res) {
  console.log('requesting all tasks...')
  Task.find()
    .then(data => {
    	console.log('response received all tasks...')
    	console.log(data)
      res.render('index', { data })
    })
}

module.exports = getAll
