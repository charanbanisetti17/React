import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import '../HomePage.css';
import { useParams } from 'react-router-dom';

const HomePage = ({ addToCart }) => {
  // List of products (you can replace these with real data or fetch from an API)
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

  // Set initial page and number of products to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);  // Show 4 products per page
  const [showAll, setShowAll] = useState(false);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage * productsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to slice products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Show all products when the "View All" button is clicked
  const handleViewAll = () => {
    setShowAll(true);
    setCurrentPage(1);  // Reset to the first page if we are showing all products
  };

  // Disable "Next" button if we're on the last page
  const isNextDisabled = currentPage * productsPerPage >= products.length;

  // Disable "Previous" button if we're on the first page
  const isPrevDisabled = currentPage === 1;

  return (
    <div>
      <ProductList products={showAll ? products : currentProducts} addToCart={addToCart} />
      
      {!showAll && (
        <div className="pagination">
          <button onClick={prevPage} disabled={isPrevDisabled}>Previous</button>
          <button onClick={nextPage} disabled={isNextDisabled}>Next</button>
        </div>
      )}

      {!showAll && (
        <button onClick={handleViewAll} className="view-all-button">
          View All Products
        </button>
      )}
    </div>
  );
};

export default HomePage;