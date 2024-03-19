import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/medium.jpg';
import '../App.css'; 

const Header = ({}) => {
  return (
    <header className="header-container">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Plantify Logo" className="logo-img" />
      </Link>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/shop" className="nav-link">Shop</Link></li>
          <li><Link to="/cart" className="nav-link">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
