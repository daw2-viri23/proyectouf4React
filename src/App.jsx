import React from 'react';
import Header from './componentes/header';
import Home from './vistes/Home';
import { GlobalProvider } from './componentes/GlobalContext'; // Importamos el proveedor del contexto global
//import { Tarjeta } from './componentes/Tarjeta';
//import TotalClicksCounter from './componentes/TotalClicksCounter';
import { Route, Routes } from 'react-router-dom';
import { Juego } from './vistes/Juego';
import { AcercaDe } from './vistes/AcercaDe';
import { Login } from './vistes/Login';
import { Registro } from './vistes/Registro';

function App() {
  return (
    <GlobalProvider> {/* Envuelve la aplicación con el proveedor del contexto global */}
      <Header />
  
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Game' element={<Juego></Juego>}></Route>
        <Route path='/About' element={<AcercaDe />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Registro' element={<Registro />}></Route>
      </Routes>
    </GlobalProvider>
  );
}

export default App;
