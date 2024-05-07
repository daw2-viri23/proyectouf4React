import React, { useState } from 'react';
import { arrayPersonajes } from '../bd/arrayPersonajes'; // Asegúrate de importar correctamente el archivo con los datos
import { useGlobalContext } from './GlobalContext'; // Importamos el hook personalizado

export function Tarjeta() {
  // Creamos un estado para el contador de clics
  const [clicks, setClicks] = useState(Array(arrayPersonajes.length).fill(0));

  // Obtenemos la función para incrementar el número total de clics del contexto global
  const { incrementTotalClicks } = useGlobalContext();

  // Función para manejar el clic en una tarjeta específica
  const handleCardClick = (index) => {
    // Creamos una copia del array de clics
    const newClicks = [...clicks];
    // Incrementamos el contador de clics en la posición index
    newClicks[index] += 1;
    // Actualizamos el estado del contador de clics
    setClicks(newClicks);
    // Incrementamos el número total de clics
    incrementTotalClicks();
  };

  return (
    <div className="container mx-auto">
      <h1 className="mt-5 mb-4 text-center text-3xl font-bold">MEMORY VIRI</h1>

      <div className="grid grid-cols-5 gap-4">
        {arrayPersonajes.map((personaje, index) => (
          <div className="col-span-1" key={personaje.id} onClick={() => handleCardClick(index)}> {/* Llamamos a handleCardClick con el índice de la tarjeta */}
            <div className="card bg-gray-800 rounded-lg shadow-md">
              <div className="card-inner flex flex-col items-center justify-center">
                <img src={`${personaje.imagen}`} alt={personaje.nombre} className="w-24 h-24" />
                <p className="mt-2 text-center text-sm font-semibold">{personaje.nombre}</p>
                <p className="text-xs text-gray-400">Clics: {clicks[index]}</p> {/* Mostramos el número de clics para esta tarjeta */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
