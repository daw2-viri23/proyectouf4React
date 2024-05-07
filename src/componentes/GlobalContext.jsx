// GlobalContext.js
import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto global
const GlobalContext = createContext();

// Creamos un proveedor para el contexto global
export const GlobalProvider = ({ children }) => {
  const [totalClicks, setTotalClicks] = useState(0); // Estado para almacenar el número total de clics

  // Función para incrementar el número total de clics
  const incrementTotalClicks = () => {
    setTotalClicks(prevTotalClicks => prevTotalClicks + 1);
  };

  return (
    <GlobalContext.Provider value={{ totalClicks, incrementTotalClicks }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para utilizar el contexto global
export const useGlobalContext = () => useContext(GlobalContext);
