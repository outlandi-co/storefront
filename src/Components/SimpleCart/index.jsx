// src/Components/SimpleCart/index.jsx

import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartActions'; // Adjust import path based on your actual project structure
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Styles from './SimpleCart.module.scss'; // Adjust import extension if your module uses .scss

const SimpleCart = ({ cartItems, removeFromCart }) => {
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className={Styles['simple-cart']}>
      <h2>Shopping Cart</h2>
      <List>
        {cartItems.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            <IconButton aria-label="delete" onClick={() => handleRemoveFromCart(item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items // Assuming your cart items are stored in state.cart.items
});

export default connect(mapStateToProps, { removeFromCart })(SimpleCart);
