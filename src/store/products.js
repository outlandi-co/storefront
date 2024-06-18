import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { category: 'electronics', name: 'Laptop', description: 'A high performance laptop', price: 1000, inventory: 5 },
    { category: 'clothing', name: 'T-Shirt', description: 'Comfortable cotton t-shirt', price: 20, inventory: 100 },
    // Add more products as needed
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
