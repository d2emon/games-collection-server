var mongoose = require('mongoose')
var config = require('./config')

mongoose.connect(config.get('mongoose:uri'), { useMongoClient: true }).then(
  () => { console.log('Connected to url: ' + config.get('mongoose:uri')) },
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
