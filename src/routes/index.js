var express = require('express')
var router = express.Router()

var models = require('../models')

function showError(res, err) {
  res.send({
    error: err
  })
  return console.error(err)
}

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/games', (req, res, next) => {
  models.Game.find({}, (err, models) => {
    if (err) return console.error(err)

    res.send(models)
  })
})

router.post('/games', (req, res, next) => {
  var note = new models.Game({
    title: req.body.title,
    body: req.body.body
  })

  note.save((err, model) => {
    if (err) return showError(res, err)

    res.send(model)
  })
})

router.get('/games/:id', (req, res, next) => {
  const id = req.params.id

  models.Game.findById(id, (err, model) => {
    if (err) return showError(res, err)

    res.send(model)
  })
})

router.delete('/games/:id', (req, res, next) => {
  const id = req.params.id

  models.Game.findByIdAndRemove(id, (err, model) => {
    if (err) return showError(res, err)

    res.send({ 'success': true })
  })
})

router.put('/games/:id', (req, res, next) => {
  const id = req.params.id

  models.Game.findById(id, (err, model) => {
    if (err) return showError(res, err)

    model.title = req.body.title
    model.body = req.body.body
    model.save((err, model) => {
      if (err) return showError(res, err)

      res.send(model)
    })
  })
})
module.exports = router
