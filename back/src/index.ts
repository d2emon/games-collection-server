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
 * Create HTTP server.
 */
const server = http.createServer(app);

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
 * Listen on provided port, on all network interfaces.
 */
server.listen(app.get('port'));
server.on('listening', onListening);
