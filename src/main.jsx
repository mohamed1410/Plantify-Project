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
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx'; 
import './index.css'; 


const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);