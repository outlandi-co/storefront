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
      const removedItem = state.products.find(product => product.id === action.payload.productId);
      if (removedItem) {
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload.productId
              ? { ...product, inventoryCount: product.inventoryCount + 1 }
              : product
          )
        };
      }
      return state;

    default:
      return state; // Return current state if no matching action type found
  }
};
