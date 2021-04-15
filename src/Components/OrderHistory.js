import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../redux/ordersReducer';
import axios from 'axios';

function OrderHistory(props){

  const user = useSelector((state) => state.reducer);
  console.log(user)
  const {orders} = useSelector((state) => state.ordersReducer);
  console.log(orders)

  const dispatch = useDispatch();

  const {user_id, username} = user;

  useEffect(() => {
    if(user_id){
      axios.get(`/api/orders/${user_id}`)
        .then(res => {
          console.log(res.data)
          dispatch(getOrders(res.data))
        })
        .catch(err => console.log('getorders', err))
    };
  }, [dispatch, user_id]);

  // function deleteOrder() {

  // }

  let mappedOrders = orders.map(orders => {
    return (
    <div className='mappedOrders' key={orders.ordered_products_id}>
      <div>
        <h1>{orders.name}</h1>
        <h3>${orders.price}</h3>
        <h3>{orders.color}</h3>
        <h3>{orders.custom_details}</h3>
        <h3>{orders.delivery_or_pickup}</h3>
        {/* price, custom details, pickup or delivery */}
      </div>
      <button>Delete Order</button>   
    </div>
    )
  });

  return(
    <div className='orderHistory'>
      <h1>Order History</h1>
      {mappedOrders}
    </div>
  )
};

export default OrderHistory;