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

    case 'REMOVE_FROM_CART':
      const cartItemId = action.payload;
      const itemToRemove = state.cart.find(item => item.cartItemId === cartItemId); // Assuming 'cart' is the correct array name in your state
      if (itemToRemove) {
        return {
          ...state,
          products: state.products.map(product =>
            product.id === itemToRemove.productId
              ? { ...product, inventoryCount: product.inventoryCount + itemToRemove.quantity }
              : product
          )
        };
      }
      return state;

    default:
      return state;
  }
};
