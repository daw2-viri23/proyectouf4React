import React from 'react';
import { useGlobalContext } from './GlobalContext'; // Importamos el hook personalizado

const TotalClicksCounter = () => {
  const { totalClicks } = useGlobalContext();

  return (
    <div className="flex justify-center items-center bg-gray-200 py-2 px-4 rounded-md shadow-md">
      <p className="text-lg font-semibold text-gray-800">Total de clics: {totalClicks}</p>
    </div>
  );
};

export default TotalClicksCounter;