import express from 'express';

export default (req: express.Request, res: express.Response, next: express.NextFunction) => res
    .json({ title: 'Express' });
