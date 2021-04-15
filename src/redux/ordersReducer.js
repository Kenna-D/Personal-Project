const initialState = {
  orders: []
};

const GET_ORDERS = 'GET_ORDERS';

export function getOrders(payload){
  return {
    type: GET_ORDERS,
    payload
  }
};

export default function ordersReducer(state= initialState, action){
  const{type, payload} = action
  switch(type){
    case GET_ORDERS:
      return{...state, orders: payload};
    default: return state;
  };
};