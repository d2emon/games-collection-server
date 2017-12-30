var express = require('express')
var router = express.Router()

var models = require('../models')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' })
})

router.post('/games', (req, res) => {
  console.log(req.body)
  var note = new models.Game({
    title: req.body.title,
    body: req.body.body
  })

  note.save((err, model) => {
    if (err) {
      res.send({
        error: err
      })
      return console.error(err)
    }

    res.send(model)
  })

  models.Game.find({}, (err, models) => {
    if (err) return console.error(err)

    console.log('Found')
    console.log(models)
  })
})

module.exports = router
