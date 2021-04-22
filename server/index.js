require('dotenv').config();
const express = require('express'),
      userCtrl = require('./controllers/users'),
      productCtrl = require('./controllers/products'),
      ordersCtrl = require('./controllers/orders'),
      paymentCtrl = require('./controllers/payments');
const massive = require('massive');
const session = require('express-session');
const path = require('path');

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}));

//Auth Endpoints
app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.get('/api/auth/me', userCtrl.getUser);
app.post('/api/auth/logout', userCtrl.logout);

//Products Endpoints
app.get('/api/products', productCtrl.getAll);
app.get('/api/products/:id', productCtrl.getOne);

//Orders Endpoints
app.get('/api/orders/:id', ordersCtrl.getOrders);
app.put('/api/orders/edit/:id', ordersCtrl.editOrder);
app.delete('/api/orders/delete/:id', ordersCtrl.deleteOrder);

//Payment Endpoint
app.post('/api/payment', paymentCtrl.payment);
// app.post('/api/orders/create', paymentCtrl.makeOrder);


app.use(express.static(__dirname + '/../build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,  '../build/index.html'));
})


massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then((db) => {
  app.set('db', db);
  app.listen(SERVER_PORT, () => console.log(`DB is up and Server is running on ${SERVER_PORT}`));
}).catch(err => console.log(err));