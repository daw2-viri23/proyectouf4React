import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Utiliza createRoot en lugar de ReactDOM.render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
