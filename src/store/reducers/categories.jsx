// src/store/reducers/categories.js
const initialState = {
  categories: [], // Initial state for categories
  activeCategory: null // Initial state for active category
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload
      };
    default:
      return state;
  }
};
