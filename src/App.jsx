import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setProducts } from './store/actions/productActions';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Products from './Components/Products/index';
import SimpleCart from './Components/SimpleCart/index';

const App = ({ setProducts }) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [setProducts]);

  return (
    <div>
      <Header />
      <Categories />
      <Products />
      <SimpleCart />
      <div id="productsList"></div>
    </div>
  );
};

export default connect(null, { setProducts })(App);
