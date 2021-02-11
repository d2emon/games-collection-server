import express from 'express';
import Game from '../models/game';

export const listGames = (req: express.Request, res: express.Response, next: express.NextFunction) => Game
    .find({})
    .then((models) => res.json(models))
    .catch((error) => res.json({ error }));

export const addGame = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const game = new Game({
        title: req.body.title,
        body: req.body.body,
    });
    return game
        .save()
        .then((model) => res.json(model))
        .catch((error) => res.json({ error }));
}

export const getGame = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id
    return Game
        .findById(id)
        .then((model) => res.json(model))
        .catch((error) => res.json({ error }));
}

export const deleteGame = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id
    return Game
        .findByIdAndRemove(id)
        .then(() => res.json({ success: true }))
        .catch((error) => res.json({ error }));
}

export const updateGame = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id
    return Game
        .findById(id)
        .then((model) => {
            model.name = req.body.name
            model.description = req.body.description
            return model.save();
        })
        .then((model) => res.json(model))
        .catch((error) => res.json({ error }));
}
