import {Sequelize} from 'sequelize-typescript';
import { dbconfig } from '../config';
import { Currency } from '../models/currencymodel'
//import { Person } from '../models/person.model';

// Check example at https://github.com/CarlosRodrigues/Sequelize-typescript-example
// and checking https://github.com/suksant/sequelize-typescript-examples

const sequelize =  new Sequelize({
        database: dbconfig.database,
        dialect: dbconfig.dialect,
        username: dbconfig.username,
        password: dbconfig.password,
        host: dbconfig.host,
        port: dbconfig.port
});

sequelize.addModels([Currency]); 

Currency.findAll()
.then((mylistofCurrencies) => {
    mylistofCurrencies.forEach((countrycurrency) => {
        console.log(countrycurrency.city+" has an exchange rate of "+countrycurrency.exchangerate)});
})
.catch((err) => {
    console.log(err);
})

// Initialization of the models ///
/*
sequelize
    .sync({ force: true })
    .then(() => {        
        console.log('Connection synced')
        return; 
    })
    .catch(err => {
        console.log('err');
    });
*/
// Adding new currencies to the DB ///
/*
const mycurrency = new Currency({country: 'Cambodia', city: 'Kampot', exchangerate: 3700});
mycurrency.save()
.then(()=> {
    console.log("City "+mycurrency.city+" added to DB");
})
.catch((err) => {
    console.log(err);
})
*/
