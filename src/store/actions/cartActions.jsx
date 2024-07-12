import { v4 as uuidv4 } from 'uuid';

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: { ...product, cartItemId: uuidv4() }
});

export const removeFromCart = (cartItem) => ({
  type: 'REMOVE_FROM_CART',
  payload: cartItem
});
