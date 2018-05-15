import {Sequelize} from 'sequelize-typescript';
import { dbconfig } from '../config';
import { Currency } from '../models/currencymodel'
import { Person } from '../models/person.model';

console.log(dbconfig.dialect);

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

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// sequelize.addModels([Currency]);
sequelize.addModels([__dirname + '../models/person.model.ts'])

const person = new Person({name: 'bob', age: 99});
// person.save();


//const mycurrency = new Currency({country: 'Singapore', exchangerate: '10'});
//console.log(mycurrency.exchangerate);

/*
const mycurrency = sequelize.define('currency', {
    country: {
      type: Sequelize.STRING
    },
    exchangerate: {
      type: Sequelize.REAL
    }
  });

mycurrency
    .sync({ force: true })
    .then(() => {        
        console.log('Connection synced')
        return mycurrency.create({
            country: 'Ireland',
            exchangerate: '3'
        })
    })
    .catch(err => {
        console.log('err');
    });
*/

// sequelize
// .sync({force: true})
// .then(()=> {
//     console.log(__dirname);
//     console.log('Connection synced')
// })
// .catch(err => {
//     console.log('err');
// });

sequelize
        .authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
        })
        .catch(err => {
          console.error('Unable to connect to the database:', err);
        });
    
(async () => {
            //generate db schema without drop. force: true-> drops existing tables
            await sequelize.sync({ force: true });
            console.log("sync complete"); 
            });
export class myDatabase {
    
    public mydbsync(){
        

        // (async () => {
        //     //generate db schema without drop. force: true-> drops existing tables
        //     await sequelize.sync({ force: true }); 
        //     });
    }
};