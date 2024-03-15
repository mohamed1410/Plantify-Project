import React from 'react';
import Header from '../components/Header';

const NotFound = () => {
  return (
    <div>
      <Header />
      <h2>Page Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <button onClick={() => window.location.href = '/'}>Go Home</button>
    </div>
  );
}

export default NotFound;