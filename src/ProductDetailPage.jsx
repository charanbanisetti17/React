import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = ({ products, addToCart }) => {
  const { id } = useParams(); // Get product ID from the URL
  const product = products.find((prod) => prod.id === parseInt(id));

  const navigate = useNavigate(); 

  if (!product) {
    return (
      <div>
        <p>Product not found!</p>
        <button onClick={() => navigate('/')}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <button onClick={() => navigate(-1)} className="go-back-button">
        Go Back
      </button>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>₹{new Intl.NumberFormat().format(product.price)}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailPage;