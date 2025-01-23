import React from 'react';
import '../Cart.css';

const Cart = ({ cartItems }) => {
  // Calculate total price of items in cart
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;