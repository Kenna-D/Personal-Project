import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../redux/ordersReducer";
import axios from "axios";
import "./OrderHistory.scss";
import IndividualOrder from "./IndividualOrder";
import Nav from "./Nav";

function OrderHistory(props) {
  const user = useSelector((state) => state.reducer);
  console.log(user);
  const { orders } = useSelector((state) => state.ordersReducer);

  const dispatch = useDispatch();

  const { user_id } = user;

  useEffect(() => {
    if (user_id) {
      let id = user_id;
      axios
        .get(`/api/orders/${id}`)
        .then((res) => {
          // console.log(res.data)
          dispatch(getOrders(res.data));
        })
        .catch((err) => console.log("getorders", err));
    }
  }, [user_id, dispatch]);

  let mappedOrders = orders.map((orders) => {
    return <IndividualOrder key={orders.ordered_products_id} orders={orders} />;
  });

  return (
    <div>
      <Nav />
      <div className="orderHistory">
        <h1 className="ordersTitle">Order History</h1>
        <div>{mappedOrders}</div>
      </div>
    </div>
  );
}

export default OrderHistory;
