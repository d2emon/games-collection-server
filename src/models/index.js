const mongoose = require('mongoose')
const db = require('../db')

var gameSchema = mongoose.Schema({
  title: String,
  body: String
})

var Game = mongoose.model('Game', gameSchema)

module.exports = {
  Game: Game
}
