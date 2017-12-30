var mongoose = require('mongoose')

const dbConfig = require('../config/db')

mongoose.connect(dbConfig.url, { useMongoClient: true }).then(
  () => { console.log('Connected to url: ' + dbConfig.url) },
  err => { console.error(err) }
)
mongoose.Promise = global.Promise

console.log('MongoClient')

var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.on('connected', () => {
  console.info('MongoDB connected')
})

module.exports = db
