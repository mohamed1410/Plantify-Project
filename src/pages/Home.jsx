// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
 // Assuming you have a Header component
// import ProductList from '../components/ProductList'; // Assuming you have a ProductList component

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from the API when the component mounts
//     axios.get('/api/products')
//       .then(response => {
//         setProducts(response.data); // Set the fetched products in the state
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <Header /> {/* Render the Header component */}
//       <h2>Welcome to Plantify!</h2> {/* Heading indicating the welcome message */}
//       <ProductList products={products} /> {/* Render the ProductList component with the fetched products */}
//     </div>
//   );
// }

// export default Home;


// import axios from 'axios';
// import Header from '../components/Header'; // Assuming you have a Header component
// import ProductList from '../components/ProductList'; // Assuming you have a ProductList component
 ; // Import custom CSS for homepage styling

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from the API when the component mounts
//     axios.get('/api/products')
//       .then(response => {
//         setProducts(response.data); // Set the fetched products in the state
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   return (
//     <div className="home-container">
//       <Header /> {/* Render the Header component */}
//       <div className="background-image">
//         <div className="welcome-section">
//           <h1>Welcome to Plantify!</h1> {/* Heading indicating the welcome message */}
//           <p className="subheading">Discover a world of greenery</p> {/* Subheading */}
//         </div>
//       </div>
//       <ProductList products={products} /> {/* Render the ProductList component with the fetched products */}
//     </div>
//   );
// }

// export default Home;





import { Link } from 'react-router-dom';
 import React, { useEffect, useState } from 'react';
 import '../App.css'
 import Header from '../components/Header';
const Home = () => {
  return (
    <div className="home-container">
      <Header /> {/* Render the Header component */}
      <div className="background-image">
        <div className="welcome-section">
          <h1>Welcome to Plantify!</h1> {/* Heading indicating the welcome message */}
          <p className="subheading">Your One-Stop Destination for Everything Green</p> {/* Subheading */}
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


