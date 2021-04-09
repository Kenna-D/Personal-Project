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
    <Route exact path="/" component={Home} />
    <Route path="/all-products" component={AllProducts} />
    <Route path="/cart" component={Cart} />
    <Route path="/order-history" component={OrderHistory} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/product/:id" component={Product} />
  </Switch>
)