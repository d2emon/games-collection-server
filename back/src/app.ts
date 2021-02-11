import cors from 'cors';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import connection, { connect } from './lib/mongo';
// import debug from './helpers/debug';

import NotFoundException from './exceptions/notFound';
import ErrorHandler from './handlers/error';

// import models from '../models';

import indexRouter from './routes';
import gamesRouter from './routes/games';
import companiesRouter from './routes/companies';

const app = express();

app.locals.publicPath = path.join(__dirname, '..', 'public');
app.locals.connection = connection
// app.locals.oauth = oauth;
// connection.on('error', error => debug(error || ''));
// connection.once('open', () => debug('MongoDB connected'));

// app.set('models', models)
app.set('dbConnection', connect)

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(app.locals.publicPath));

app.use('/', indexRouter);
app.use('/api/v1.0/games', gamesRouter);
app.use('/api/v1.0/companies', companiesRouter);

// error handlers
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => ErrorHandler(
    new NotFoundException(),
    req,
    res,
    next,
));
app.use(ErrorHandler);

export default app;
