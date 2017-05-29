function checkCredentials (req, res, next) {
  const { apiKey } = req.query
  console.log(apiKey)
  if (apiKey == 12345) {
    console.log('You have the correct APIKEY!')
    next()
  } else {
    console.log('You don´t have the correct APIKEY!')
  }
}

module.exports = checkCredentials
