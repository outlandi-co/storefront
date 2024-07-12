import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './SimpleCart.module.scss';

const SimpleCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.cartItemId)); // Pass cartItemId or productId to removeFromCart
  };

  return (
    <div className={styles.simpleCart}>
      <h2>Shopping Cart</h2>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.cartItemId}>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            <IconButton aria-label="delete" onClick={() => handleRemoveFromCart(item)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SimpleCart;
