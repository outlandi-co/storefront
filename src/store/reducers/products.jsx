// src/store/reducers/products.js

import { initialState } from './initialState';

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload // Update products array with new payload
      };
    default:
      return state; // Return current state if no matching action type found
  }
};
