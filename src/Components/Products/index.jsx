import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { addToCart } from '../../store/actions/cartActions';
import styles from './Products.module.scss';

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const getMockImageUrl = (productName) => `https://picsum.photos/400/300?text=${encodeURIComponent(productName)}`;

  const handleAddToCart = (product) => {
    if (product.inventoryCount > 0) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className={styles.productsContainer}>
      <h2>Products</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <Card key={product.id} className={styles.productCard}>
            <CardMedia component="img" height="140" image={getMockImageUrl(product.name)} alt={product.name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: {product.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Inventory: {product.inventoryCount}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={() => handleAddToCart(product)} disabled={product.inventoryCount === 0}>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
