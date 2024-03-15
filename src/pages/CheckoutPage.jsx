// import React from 'react';
// import Header from '../components/Header'; // Assuming you have a Header component
// import CheckoutForm from '../components/CheckoutForm'; // Assuming you have a CheckoutForm component

// const CheckoutPage = () => {
//   return (
//     <div>
//       <Header /> {/* Render the Header component */}
//       <h2>Checkout</h2> {/* Heading indicating the checkout step */}
//       <CheckoutForm /> {/* Render the CheckoutForm component */}
//       <button onClick={() => window.history.back()}>Go Back</button> {/* Button to go back to the previous page */}
//       {/* Or a link to go back to the previous page */}
//     </div>
//   );
// }

// export default CheckoutPage;
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import Header from '../components/Header'; // Assuming you have a Header component
import CheckoutForm from '../components/CheckoutForm'; // Assuming you have a CheckoutForm component

const CheckoutPage = () => {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <h2>Checkout</h2> {/* Heading indicating the checkout step */}
      <CheckoutForm /> {/* Render the CheckoutForm component */}
      {/* Link to go back to the previous page */}
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default CheckoutPage;