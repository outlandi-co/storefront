import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import ProductsModule from './Products.module.scss';
import { addToCart } from '../../store/actions/cartActions'; // Import the addToCart action creator

const Products = ({ products, addToCart }) => {
  const getMockImageUrl = (productName) => {
    return `https://picsum.photos/400/300?text=${encodeURIComponent(productName)}`;
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Dispatch the addToCart action
  };

  return (
    <div className={ProductsModule.productsContainer}>
      <h2>Products</h2>
      <div className={ProductsModule.productsGrid}>
        {products.map(product => (
          <Card key={product.id} className={ProductsModule.productCard}>
            <CardMedia
              component="img"
              height="140"
              image={getMockImageUrl(product.name)}
              alt={product.name}
            />
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
              <Button
                size="small"
                color="primary"
                onClick={() => handleAddToCart(product)} // Call handleAddToCart onClick
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products
});

const mapDispatchToProps = {
  addToCart: addToCart // Map the addToCart action creator to props
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
