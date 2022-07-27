import express from 'express';
import config from '../config';
import debug from '../debug';
import HttpException from '../exceptions/http';

/*eslint-disable */
const errorResponse = (error: HttpException) => ({
    error: error.status,
    errorMessage: error.message,
    // errorMessage: error.toString,
    errorDetails: config.DEBUG_ERRORS ? error : undefined,
});

// next(createError(404));
const errorHandler = (error: HttpException, req: express.Request, res: express.Response, next: express.NextFunction) => res
    // .status((error.code === 'ENOENT') ? 404 : 500)
    .status(error.status || 500)
    .json(errorResponse(error));

export const error404 = (req: express.Request, res: express.Response, next: express.NextFunction) => errorHandler(
    new HttpException(404, 'Page not found'),
    req,
    res,
    next,
);

export default (error: HttpException, req: express.Request, res: express.Response, next: express.NextFunction) => {
    debug(error);
    return errorHandler(error, req, res, next);
};
/*eslint-enable */
