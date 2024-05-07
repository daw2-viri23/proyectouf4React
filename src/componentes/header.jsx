// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <nav class="bg-gray-800 p-4">
      <ul class="flex justify-center space-x-4">
        <li><a href="#" class="text-white hover:text-gray-300">Home</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Pokemons Memory</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Marvel Memory</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Acerca de</a></li>
      </ul>
    </nav>
  );
};

export default Header;
