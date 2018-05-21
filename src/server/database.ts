import {Sequelize} from 'sequelize-typescript';
import { dbconfig } from '../../config';
import { Currency } from './models/currencymodel'
import { Person } from './models/person.model';

// Check example at https://github.com/CarlosRodrigues/Sequelize-typescript-example
// and https://github.com/suksant/sequelize-typescript-examples
// with help here https://github.com/RobinBuschmann/st-366 

export const sequelize =  new Sequelize({
        database: dbconfig.database,
        dialect: dbconfig.dialect,
        username: dbconfig.username,
        password: dbconfig.password,
        host: dbconfig.host,
        port: dbconfig.port
});

sequelize.addModels([Currency]);
sequelize.addModels([Person]);

//initializeDatabase();
//populateData();

sequelize.authenticate().then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
})

// Force Initialization of the models and wipe all data ///
function initializeDatabase() {
    sequelize
        .sync({ force: true })
        .then(() => {
            console.log('Connection synced')
            return;
        })
        .catch(err => {
            console.log('err');
        });
}


    // Adding new currencies to the DB ///
function populateData(){
    const mycurrency = new Currency({ country: 'Cambodia', exchangerate: 3700 });
    mycurrency.save()
        .then(() => {
            console.log("City " + mycurrency.country + " added to DB");
        })
        .catch((err) => {
            console.log(err);
        })

}
