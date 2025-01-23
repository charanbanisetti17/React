import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './Footer';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'; 
import ProductDetailPage from './ProductDetailPage'; // Import ProductDetailPage

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Pizza', price: 300, description: 'Delicious cheese pizza', image: 'https://www.eatingwell.com/thmb/k3RhYf4XhAeqAejYjdInOlSOp6I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-1124303516-36413b5bf61f45f1b7d18d90000b56b7.jpg' },
    { id: 2, name: 'Burger', price: 220, description: 'Juicy beef burger', image: 'https://www.shutterstock.com/image-photo/grilled-gourmet-burger-cheese-tomato-600nw-2467669143.jpg' },
    { id: 3, name: 'Pasta', price: 160, description: 'Creamy pasta with sauce', image: 'https://static.toiimg.com/photo/84784534.cms'},
    { id: 4, name: 'Sushi', price: 350, description: 'Fresh sushi rolls', image: 'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg'},
    { id: 5, name: 'Tacos', price: 180, description: 'Spicy tacos', image: 'https://downshiftology.com/wp-content/uploads/2020/04/Carnitas-Tacos-main-500x500.jpg'},
    { id: 6, name: 'Salad', price: 120, description: 'Healthy fresh salad', image: 'https://www.recipetineats.com/tachyon/2021/08/Garden-Salad_47-SQ.jpg'},
    { id: 7, name: 'Steak', price: 250, description: 'Grilled steak with veggies', image: 'https://www.allrecipes.com/thmb/3cixVDmAtbb2hYxoFLVJ4VPQ7rA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/143809-best-steak-marinade-in-existence-ARMag-1x1-1-8105b6b8e5cb4931ba8061f0425243dd.jpg' },
    { id: 8, name: 'Pancakes', price: 150, description: 'Fluffy pancakes with syrup', image: 'https://media.istockphoto.com/id/880755594/photo/stack-of-red-velvet-pancakes-with-yogurt-and-strawberry-on-white-plate-square.jpg?s=612x612&w=0&k=20&c=tU8uzMmwThkIF1o-45LEnBpf7ZZiNMlMWBi9hE57DIo='},
    { id: 9, name: 'Ice Cream', price: 140, description: 'Cool and creamy ice cream', image: 'https://png.pngtree.com/thumb_back/fh260/background/20240722/pngtree-sweet-ice-cream-illustration-generative-ai-photo-image_16079857.jpg'},
    { id: 10, name: 'Hot Dog', price: 170, description: 'Classic hot dog with mustard', image: 'https://static01.nyt.com/images/2023/07/25/multimedia/25WTE-hotdogs1-qvjm/25WTE-hotdogs1-qvjm-mediumSquareAt3X.jpg'},
    { id: 11, name: 'Smoothie', price: 80, description: 'Fresh fruit smoothie', image: 'https://thumbs.dreamstime.com/b/banana-fruit-juice-smoothie-fresh-drink-bottle-square-healthy-drinking-232341960.jpg'},
    { id: 12, name: 'Cheeseburger', price: 280, description: 'Cheeseburger with extra cheese', image: 'https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=58sPQY3D_99QyfJx9QWIey8kr249hQ1qO8K0nAslhPQ='}
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="app-container">
        <Header cartItems={cartItems} />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/myreact" element={<HomePage addToCart={addToCart} products={products} />} />
              <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/product/:id" element={<ProductDetailPage products={products} addToCart={addToCart} />} /> {/* Route to Product Detail Page */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;