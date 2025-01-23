import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹{new Intl.NumberFormat().format(product.price)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      {/* Link to product detail page */}
      <Link to={`/product/${product.id}`} className="view-details-button">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;