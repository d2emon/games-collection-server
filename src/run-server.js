#!/usr/bin/nodejs
var debug = require('debug')('game-collection');
var app = require('../src/app');
var config = require('./config')

app.set('port', process.env.PORT || config.get('port'));

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
