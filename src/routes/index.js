var express = require('express')
var router = express.Router()

import { Game, Company } from '../models'

function showError(res, err) {
  res.send({
    error: err
  })
  return console.error(err)
}

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

// Games
router.get('/games', (req, res, next) => {
  console.log(Game)
  Game.find({}, (err, models) => {
    if (err) return console.error(err)

    res.send(models)
  })
})

router.post('/games', (req, res, next) => {
  var note = new Game({
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

  Game.findById(id, (err, model) => {
    if (err) return showError(res, err)

    res.send(model)
  })
})

router.delete('/games/:id', (req, res, next) => {
  const id = req.params.id

  Game.findByIdAndRemove(id, (err, model) => {
    if (err) return showError(res, err)

    res.send({ 'success': true })
  })
})

router.put('/games/:id', (req, res, next) => {
  const id = req.params.id

  Game.findById(id, (err, model) => {
    if (err) return showError(res, err)

    model.name = req.body.name
    model.description = req.body.description
    model.save((err, model) => {
      if (err) return showError(res, err)

      res.send(model)
    })
  })
})

// Companies
router.get('/companies', (req, res, next) => {
  Company.find({}, (err, models) => {
    if (err) return console.error(err)

    res.send(models)
  })
})

router.post('/companies', (req, res, next) => {
  var note = new Company({
    title: req.body.title,
    body: req.body.body
  })

  note.save((err, model) => {
    if (err) return showError(res, err)

    res.send(model)
  })
})

router.get('/companies/:id', (req, res, next) => {
  const id = req.params.id

  Company.findById(id, (err, model) => {
    if (err) return showError(res, err)

    res.send(model)
  })
})

router.delete('/companies/:id', (req, res, next) => {
  const id = req.params.id

  Company.findByIdAndRemove(id, (err, model) => {
    if (err) return showError(res, err)

    res.send({ 'success': true })
  })
})

router.put('/companies/:id', (req, res, next) => {
  const id = req.params.id

  Company.findById(id, (err, model) => {
    if (err) return showError(res, err)

    model.name = req.body.name
    model.description = req.body.description
    model.save((err, model) => {
      if (err) return showError(res, err)

      res.send(model)
    })
  })
})

module.exports = router
