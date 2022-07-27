import http from 'http';
import app from './app';
import config from './config';
import debug from './debug';
import normalizePort from './helpers/normalizePort';

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(config.PORT);
app.set('port', port);

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
};

/**
 * Create HTTP server.
 * Listen on provided port, on all network interfaces.
 */
const server = http.createServer(app);
server.listen(app.get('port'));
server.on('listening', onListening);
