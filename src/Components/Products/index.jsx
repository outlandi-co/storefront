import React from 'react';
import { connect } from 'react-redux';
import ProductsModule from '../Products/Products.module.scss'; // Adjust the import path based on your actual file name and structure
import SimpleCartModule from '../SimpleCart/SimpleCart.module.scss'; // Adjust the import path based on your actual file name and structure

const Products = ({ products }) => {
  return (
    <div className={`${ProductsModule.productsContainer} ${SimpleCartModule.simpleCart}`}>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>Name: {product.name}</div>
            <div>Category: {product.category}</div>
            <div>Description: {product.description}</div>
            <div>Price: ${product.price}</div>
            <div>Inventory: {product.inventoryCount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products
});

export default connect(mapStateToProps)(Products);
