import express from 'express';
import HttpException from '../exceptions/http';
// import { Game, Company } from '../models'

const showError = (res: express.Response, err: HttpException) => res.send({
    error: err
});

export const listCompanies = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    Company.find({}, (err, models) => {
      if (err) return console.error(err)

      res.send(models)
    })
     */
    return res.json([]);
};

export const addCompany = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    const note = new Company({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description
    })

    note.save((err, model) => {
      if (err) return showError(res, err)

      res.send(model)
    })
     */
    return res.json({});
}

export const getCompany = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    const id = req.params.id

    Company.findById(id, (err, model) => {
      if (err) return showError(res, err)

      res.send(model)
    })
     */
    return res.json({});
}

export const deleteCompany = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    const id = req.params.id

    Company.findByIdAndRemove(id, (err, model) => {
      if (err) return showError(res, err)

      res.send({ 'success': true })
    })
     */
    return res.json({});
}

export const updateCompany = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    const id = req.params.id

    Company.findById(id, (err, model) => {
      if (err) return showError(res, err)

      model.name = req.body.name
      model.image = req.body.image
      model.description = req.body.description
      model.save((err, model) => {
        if (err) return showError(res, err)

        res.send(model)
      })
    })
     */
    return res.json({});
}
