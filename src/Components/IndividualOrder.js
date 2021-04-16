import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {getOrders} from '../redux/ordersReducer';


function IndividualOrder(props){
  const {orders} = props;
  const [details, setDetails] = useState(orders.custom_details);
  const [edit, setEdit] = useState('noEdit');
  
  const dispatch = useDispatch();

  function editComment(e) {
    setDetails(e.target.value)
  }

  function handleClick() {
    if(edit === 'noEdit'){
      setEdit('edit')
    } else {
      setEdit('noEdit')
    }
  };

  function editOrder(id) {
    axios.put(`/api/orders/edit/${id}`, {details})
      .then((res) => {
        handleClick()
        dispatch(getOrders(res.data))
      });
  };

  return (
    <div className='mappedOrders'>
    <div>
      <h1>{orders.name}</h1>
      <h3>${orders.price}</h3>
      <h3>{orders.color}</h3>
      <div className={edit === 'noEdit' ? 'noEdit' : 'edit'}>
        <h3>{orders.custom_details}</h3>
      </div>
      <div className={edit === 'noEdit' ? 'edit' : 'noEdit'}>
        <input value={details} onChange={e => editComment(e)}></input>
      </div>
      <h3>{orders.delivery_or_pickup}</h3>
      {/* price, custom details, pickup or delivery */}
    </div>
    <div className={edit === 'noEdit' ? 'noEdit' : 'edit'}>
      <button onClick={() => handleClick()}>Edit Order</button>
      <button>Delete Order</button>   
    </div>
    <div className={edit === 'noEdit' ? 'edit' : 'noEdit'}>
      <button onClick={() => editOrder(orders.ordered_products_id)}>Submit Edit</button>
    </div>
  </div>
  )
}
export default IndividualOrder