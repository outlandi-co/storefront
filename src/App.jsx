import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './store/actions/productActions';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Products from './Components/Products';
import SimpleCart from './Components/SimpleCart';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const products = await response.json();
        dispatch(setProducts(products));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Categories />
      <Products />
      <SimpleCart />
    </div>
  );
};

export default App;
