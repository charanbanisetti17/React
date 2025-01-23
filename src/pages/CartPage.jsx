import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems }) => {
  return <Cart cartItems={cartItems} />;
};

export default CartPage;