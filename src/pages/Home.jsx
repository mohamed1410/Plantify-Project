


import { Link } from 'react-router-dom';
 import React, { useEffect, useState } from 'react';
 import '../App.css'
 import Header from '../components/Header';
const Home = () => {
  return (
    <div className="home-container">
      <Header /> 
      <div className="background-image">
        <div className="welcome-section">
          <h1>Welcome to Plantify!</h1> 
          <p className="subheading">Your One-Stop Destination for Everything Green</p> 
          <p>At Plantify, we believe in bringing nature closer to you. Explore our vast collection of plants, gardening tools, and expert advice to transform your space into a green paradise.</p>
          <p>Whether you're a seasoned gardener or just starting out, we have something for everyone. From indoor plants to outdoor landscaping essentials, we've got you covered.</p>
          <p>Join our community of plant enthusiasts and embark on a journey of growth, learning, and appreciation for the beauty of nature.</p>
          <Link to="/shop" className="explore-button">Explore Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;


