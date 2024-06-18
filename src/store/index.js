// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './Categories/index';
import productsReducer from './products';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
  },
});

export default store;

