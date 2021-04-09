import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import AllProducts from './Components/AllProducts';
import Cart from './Components/Cart';
import OrderHistory from './Components/OrderHistory';
import Login from './Components/Login';
import Register from './Components/Register';
import Product from './Components/Product';


export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/all-products" component={AllProducts} />
    <Route path="/cart" component={Cart} />
    <Route path="/order-history/:id" component={OrderHistory} />
    <Route path="/home" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/product/:id" component={Product} />
  </Switch>
)