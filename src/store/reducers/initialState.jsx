// src/store/initialState.js

export const initialState = {
  products: [
    { id: 1, name: 'Laptop', category: 'Electronics', description: 'Powerful laptop for work and play.', price: 999, inventoryCount: 10 },
    { id: 2, name: 'T-Shirt', category: 'Clothing', description: 'Comfortable cotton t-shirt.', price: 19.99, inventoryCount: 50 },
    { id: 3, name: 'Book', category: 'Books', description: 'Bestseller novel.', price: 14.99, inventoryCount: 25 }
  ],
  cart: []
};
