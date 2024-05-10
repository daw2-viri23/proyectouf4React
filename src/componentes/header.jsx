import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/"><a href="#" className="text-white hover:text-gray-300">Home</a></Link>
          <Link to="/Game"><a href="#" className="text-white hover:text-gray-300">Pokemons Memory</a></Link>
          <a href="#" className="text-white hover:text-gray-300">Marvel Memory</a>
          <Link to="/About"><a href="#" className="text-white hover:text-gray-300">Acerca de</a></Link>
        </div>
        <div className="space-x-4">
          <Link to="/Login"><button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Iniciar sesión</button></Link>
          <Link to="/Registro"><button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Registrarse</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
