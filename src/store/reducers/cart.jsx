const initialState = {
  items: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { id, cartItemId } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem && existingItem.quantity < action.payload.inventoryCount) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      } else if (!existingItem) {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1, cartItemId }]
        };
      }
      return state;

    case 'REMOVE_FROM_CART':
      const removedItem = state.items.find(item => item.cartItemId === action.payload);
      if (removedItem) {
        return {
          ...state,
          items: state.items.filter(item => item.cartItemId !== action.payload)
        };
      }
      return state;

    default:
      return state;
  }
};
