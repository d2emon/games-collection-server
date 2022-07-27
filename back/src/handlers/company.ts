import express from 'express';
import Company from '../models/company';

/*eslint-disable */
export const listCompanies = (req: express.Request, res: express.Response, next: express.NextFunction) => Company
    .find({})
    .then((models) => res.json(models))
    .catch((error) => res.json({ error }));

export const addCompany = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const company = new Company({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
    });
    return company
        .save()
        .then((model) => res.json(model))
        .catch((error) => res.json({ error }));
}

export const getCompany = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id
    return Company
        .findById(id)
        .then((model) => res.json(model))
        .catch((error) => res.json({ error }));
}

export const deleteCompany = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id
    return Company
        .findByIdAndRemove(id)
        .then(() => res.json({ success: true }))
        .catch((error) => res.json({ error }));
}

export const updateCompany = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id
    return Company
        .findById(id)
        .then((model) => {
            model.name = req.body.name
            model.image = req.body.image
            model.description = req.body.description
            return model.save();
        })
        .then((model) => res.json(model))
        .catch((error) => res.json({ error }));
}
/* eslint-enable */
