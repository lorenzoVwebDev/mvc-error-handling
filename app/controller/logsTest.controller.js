const { errorLogger } = require('../middleware/logEvents.js')

const logsTest = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send('invalid get request')
      throw new Error('invalid get request')
    }
  } catch (err) {
    errorLogger(err)
  }
}

module.exports = { logsTest }