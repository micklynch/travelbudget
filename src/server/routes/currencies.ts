import {Router} from 'express';
import {Currency} from '../models/currencymodel';
// From https://github.com/RobinBuschmann/sequelize-typescript-example/blob/master/lib/routes/movies.ts

export const currencies = Router();

// Basic get all route
currencies.get('/', (req, res, next) => {
    Currency
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })  
})

// TODO: Need to add routes for all other actions
// get by api/id

// post

// update api/id

// delete api/id
