import {Router} from 'express';
import {Person} from '../models/person.model';
// From https://github.com/RobinBuschmann/sequelize-typescript-example/blob/master/lib/routes/movies.ts

export const people = Router();

// Basic get all route
people.get('/', (req, res, next) => {
    Person
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })  
})