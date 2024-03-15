import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/medium.jpg';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Plantify Logo" />
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;