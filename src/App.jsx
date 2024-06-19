import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setProducts } from './store/actions/productActions';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Products from './Components/Products/index';
import SimpleCart from './Components/SimpleCart/index';

const mockProducts = [
  {
    id: 1,
    name: 'Mock Product 1',
    category: 'Mock Category',
    description: 'This is a mock product description.',
    price: 9.99,
    inventoryCount: 10
  },
  {
    id: 2,
    name: 'Mock Product 2',
    category: 'Mock Category',
    description: 'This is another mock product description.',
    price: 19.99,
    inventoryCount: 5
  }
  // Add more mock products as needed
];

const App = ({ setProducts }) => {
  useEffect(() => {
    // Simulated fetch of products from mock data
    setProducts(mockProducts); // Dispatch action to store products in Redux
  }, [setProducts]);

  return (
    <div>
      <Header />
      <Categories />
      <Products />
      <SimpleCart />
      {/* Add other components like Footer */}
    </div>
  );
};

export default connect(null, { setProducts })(App);
