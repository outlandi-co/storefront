// src/store/reducers/products.js
const initialState = {
  products: [] // Initial state for products
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};
