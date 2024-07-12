// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cart';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
