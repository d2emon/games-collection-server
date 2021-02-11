import cors from 'cors';
import express from 'express';
import path from 'path';
import logger from 'morgan';
// import db, { connect } from './helpers/mongo';
// import debug from './helpers/debug';
// import db from './lib/db';
// import oauth from './lib/oauth';

import NotFoundException from './exceptions/notFound';
import ErrorHandler from './handlers/error';

// import models from '../models';

import indexRouter from './routes';
import gamesRouter from './routes/games';
import companiesRouter from './routes/companies';

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.set('models', models)
// app.set('dbConnection', connect(process.env.MONGO_URI))
// db.on('error', error => debug('db')(error || ''));
// db.once('open', () => debug('db')('MongoDB connected'));

const publicPath = path.join(__dirname, '..', 'public');

// app.locals.db = db;
// app.locals.oauth = oauth;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));

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
