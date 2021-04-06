require('dotenv').config();
const express = require('express'),
      userCtrl = require('./controllers/users');
const massive = require('massive');
const session = require('express-session');

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));

//Auth Endpoints
app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.get('/api/auth/me', userCtrl.getUser);
app.post('/api/auth/logout', userCtrl.logout);

//Post Endpoints

//Orders Endpoints

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then((db) => {
  app.set('db', db);
  app.listen(SERVER_PORT, () => console.log(`DB is up and Server is running on ${SERVER_PORT}`));
}).catch(err => console.log(err));