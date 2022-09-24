import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';

import App from './App';

console.log("REACT_APP_TOM_TOM_API_KEY", process.env.REACT_APP_TOM_TOM_API_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


