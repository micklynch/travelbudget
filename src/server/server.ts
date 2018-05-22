import * as express  from 'express';
import {sequelize} from './database';
import {currencies} from './routes/currencyRouter';
import {people} from './routes/personRouter';

const hostname = 'localhost';
const port = 3000;

const server = express();
server.get('/api/', (req, res, next) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World');
});


// allow access from client server
server.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);

  // Pass to next layer of middleware
  next();
});

// initiate connection to db
const mysequelize = sequelize;
// add currencies route
server.use('/api/currencies', currencies);
server.use('/api/people', people);

server.listen(port, hostname, () => {
     // connect to the DB
   console.log(`Server running at http://${hostname}:${port}/`);
});
