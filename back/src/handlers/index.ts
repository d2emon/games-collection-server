import express from 'express';

/*eslint-disable */
export default (req: express.Request, res: express.Response, next: express.NextFunction) => res
    .json({ title: 'Express' });
/* eslint-enable */
