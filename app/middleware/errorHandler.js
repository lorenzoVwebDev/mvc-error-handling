const errorHandler = (err, req, res, next) => {
  console.dir(err)
  res.status(500).send(err.message)
}

module.exports = errorHandler