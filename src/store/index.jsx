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

// Dummy middleware function for example
const dummyMiddleware = store => next => action => {
  // Middleware logic can be added here
  return next(action);
};

// Array of middlewares (currently just one, can be expanded)
const middlewares = [dummyMiddleware];

// Create Redux store with combined reducers and middleware
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;
