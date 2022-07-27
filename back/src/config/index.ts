const APP_NAME = process.env.APP_NAME || 'games-collection';

const config = {
  APP_NAME,
  DEBUG: process.env.DEBUG || `${APP_NAME}:*`,
  DEBUG_ERRORS: process.env.DEBUG_ERRORS,
  HOST: 'http://localhost:3000',
  LOG_LEVEL: process.env.LOG_LEVEL,
  LOG_FILENAME: process.env.LOG_FILENAME,
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || '3000',
};

/*
import nconf from 'nconf';
import path from 'path';

const file = path.join(__dirname, '..', '..', 'config', 'config.json');
nconf
    .argv()
    .env()
    .file({ file })
    .defaults(config)
    .required([]);

export default nconf;
*/

export default config;
