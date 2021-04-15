import {createStore, combineReducers} from 'redux';
import reducer from './reducer';
import ordersReducer from './ordersReducer';

let rootReducer = combineReducers({
  reducer,
  ordersReducer
});

export default createStore(rootReducer);