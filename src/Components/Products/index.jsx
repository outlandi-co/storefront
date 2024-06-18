import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const products = useSelector(state => state.products.list.filter(product => product.category === activeCategory));

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
