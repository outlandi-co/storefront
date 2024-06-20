// src/store/actions/cartActions.js

import { v4 as uuidv4 } from 'uuid';

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: { ...product, cartItemId: uuidv4() }
});

export const removeFromCart = (cartItemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: cartItemId
});
