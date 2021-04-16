import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../redux/ordersReducer';
import axios from 'axios';
import './OrderHistory.css';
import IndividualOrder from './IndividualOrder';

function OrderHistory(props){
  

  const user = useSelector((state) => state.reducer);
  console.log(user)
  const {orders} = useSelector((state) => state.ordersReducer);

  const dispatch = useDispatch();

  const {user_id} = user;

  useEffect(() => {
    if(user_id){
      let id = user_id
      axios.get(`/api/orders/${id}`)
        .then(res => {
          console.log(res.data)
          dispatch(getOrders(res.data))
        })
        .catch(err => console.log('getorders', err))
    };
  }, [user_id, dispatch]);

  

  let mappedOrders = orders.map(orders => {
    return(
      <IndividualOrder key={orders.ordered_products_id} orders={orders}/>
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