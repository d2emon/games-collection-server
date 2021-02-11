import express from 'express';
import HttpException from '../exceptions/http';
// import { Game, Company } from '../models'

const showError = (res: express.Response, err: HttpException) => res.send({
    error: err
});

export const listGames = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    Game.find({}, (err, models) => {
      if (err) return console.error(err)

      res.send(models)
    })
     */
    return res.json([]);
};

export const addGame = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    const note = new Game({
      title: req.body.title,
      body: req.body.body
    })

    note.save((err, model) => {
      if (err) return showError(res, err)

      res.send(model)
    })
     */
    return res.json({});
}

export const getGame = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    const id = req.params.id

    Game.findById(id, (err, model) => {
      if (err) return showError(res, err)

      res.send(model)
    })
     */
    return res.json({});
}

export const deleteGame = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    const id = req.params.id

    Game.findByIdAndRemove(id, (err, model) => {
      if (err) return showError(res, err)

      res.send({ 'success': true })
    })
     */
    return res.json({});
}

export const updateGame = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    const id = req.params.id

    Game.findById(id, (err, model) => {
      if (err) return showError(res, err)

      model.name = req.body.name
      model.description = req.body.description
      model.save((err, model) => {
        if (err) return showError(res, err)

        res.send(model)
      })
    })
     */
    return res.json({});
}
