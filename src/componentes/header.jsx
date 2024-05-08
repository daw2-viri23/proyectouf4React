// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav class="bg-gray-800 p-4">
      <ul class="flex justify-center space-x-4">
        <li><Link to="/"><a href="#" class="text-white hover:text-gray-300">Home</a></Link></li>
        <li><Link to="/Game"><a href="#" class="text-white hover:text-gray-300">Pokemons Memory</a></Link></li>
        <li><a href="#" class="text-white hover:text-gray-300">Marvel Memory</a></li>
        <li><Link to="/About"><a href="#" class="text-white hover:text-gray-300">Acerca de</a></Link></li>
      </ul>
    </nav>
  );
};

export default Header;
