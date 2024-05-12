import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Utiliza createRoot en lugar de ReactDOM.render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
    
  </React.StrictMode>
);
