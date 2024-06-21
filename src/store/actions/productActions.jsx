export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products
});


// src/store/actions/productActions.js

export const updateInventory = (productId, quantityToAddBack) => ({
  type: 'UPDATE_INVENTORY',
  payload: { productId, quantityToAddBack }
});