import React from 'react';
import Header from './componentes/header';
import Home from './vistes/Home';
import { GlobalProvider } from './componentes/GlobalContext'; // Importamos el proveedor del contexto global
import { Tarjeta } from './componentes/Tarjeta';
import TotalClicksCounter from './componentes/TotalClicksCounter';

function App() {
  return (
    <GlobalProvider> {/* Envuelve la aplicación con el proveedor del contexto global */}
      <Header />
      <Home />
      <TotalClicksCounter />
      <Tarjeta />
      
    </GlobalProvider>
  );
}

export default App;
