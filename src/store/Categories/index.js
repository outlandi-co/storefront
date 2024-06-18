import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { name: 'electronics', displayName: 'Electronics', description: 'Gadgets and devices' },
    { name: 'clothing', displayName: 'Clothing', description: 'Apparel and accessories' },
    // Add more categories as needed
  ],
  activeCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
