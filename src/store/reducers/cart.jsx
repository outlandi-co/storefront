// src/store/reducers/cart.js

const initialState = {
  items: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        // If item exists in cart, increase its quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      } else {
        // If item is not in cart, add it with quantity 1
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }]
        };
      }

    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (!itemToRemove) {
        return state;
      }

      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
};
