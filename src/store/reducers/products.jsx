// src/store/reducers/products.js

import { initialState } from './initialState';

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload // Update products array with new payload
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id
            ? { ...product, inventoryCount: product.inventoryCount - 1 }
            : product
        )
      };
    default:
      return state; // Return current state if no matching action type found
  }
};
