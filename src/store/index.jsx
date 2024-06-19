import { createStore, combineReducers, applyMiddleware } from 'redux';

import { categoriesReducer } from './reducers/categories';
import { productsReducer } from './reducers/products';
import { cartReducer } from './reducers/cart';

// Combine reducers
const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer
});

// Create Redux store with combined reducers and middleware
const store = createStore(
  rootReducer,

);

export default store;
