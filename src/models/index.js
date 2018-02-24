import Game from './game.js'
import Company from './company.js'

const db = require('../db')

const host = 'http://localhost:3000'

module.exports = {
  Game: Game,
  Company: Company
}
