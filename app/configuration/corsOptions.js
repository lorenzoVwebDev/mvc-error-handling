const whiteList = ['https://www.yoursite.com'];
const { corsLogger } = require('../middleware/logEvents.js')

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      console.log(origin)
      corsLogger(`${origin} allowed by CORS`)
      callback(null, true)
    } else {
      console.log(origin)
      corsLogger(`${origin} NOT allowed by CORS`)
      callback(new Error('Not allowed by CORS'));
    }
  },
  allowedHeaders: ['project-type','Content-type'],
    exposedHeaders: ['project-type', 'Content-type'],
    credentials: true,
    maxAge: 10000,
    optionsSuccessStatus: 204
}

module.exports = corsOptions



















/* const whitelist = ['http://www.yoursite.com'];
const {corsLogger} = require('../middleware/logEvents.js')

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) != -1) {
      corsLogger(`${origin} allowed by CORS`);
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
      corsLogger(`${origin} NOT allowed by CORS`);
    }
  },
  optionSuccessStatus: 200
}

module.exports = corsOptions */