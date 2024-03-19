// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom/client' for React 18
import App from './App.jsx'; // Import the App component
import './index.css'; // Import the main stylesheet

// Find the root DOM node where the React application will be mounted
const rootElement = document.getElementById('root');

// Create a root using the new createRoot API in React 18
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the root in strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);