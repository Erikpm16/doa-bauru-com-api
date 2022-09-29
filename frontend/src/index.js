import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@tomtom-international/web-sdk-maps/dist/maps.css'

import App from './App';

console.log("REACT_APP_TOM_TOM_API_KEY", process.env.REACT_APP_TOM_TOM_API_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


