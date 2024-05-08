import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './GlobalContext'; // Importamos el hook personalizado

export function Tarjeta() {
  const [clicks, setClicks] = useState(Array(18).fill(0)); // Estado para almacenar los clics
  const [pokemons, setPokemons] = useState([]); // Estado para almacenar los datos de los pokemons
  const [visibleCards, setVisibleCards] = useState(Array(18).fill(false)); // Estado para controlar la visibilidad de las tarjetas
  const [selectedCard, setSelectedCard] = useState(null); // Estado para la tarjeta seleccionada
  const [matchedIndexes, setMatchedIndexes] = useState([]); // Estado para almacenar los índices de las tarjetas coincidentes
  const [timeLeft, setTimeLeft] = useState(20); // Estado para el tiempo restante
  const [timerRunning, setTimerRunning] = useState(false); // Estado para indicar si el temporizador está en marcha
  const [score, setScore] = useState(0); // Estado para la puntuación acumulada
  const { incrementTotalClicks } = useGlobalContext(); // Función para incrementar el número total de clics del contexto global

  useEffect(() => {
    // Función para cargar los datos de los pokemons desde la API
    const fetchPokemons = async () => {
      try {
        const randomIds = Array.from({ length: 9 }, () => Math.floor(Math.random() * 898) + 1); // Genera 9 IDs aleatorios entre 1 y 898
        const promises = randomIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json())); // Crea un array de promesas para obtener los datos de los pokemons

        const responses = await Promise.all(promises); // Espera a que se completen todas las solicitudes
        const duplicatedPokemons = [...responses, ...responses]; // Duplica la matriz de pokemons

        setPokemons(duplicatedPokemons); // Actualiza el estado con los datos de los pokemons duplicados
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    };

    fetchPokemons(); // Llama a la función para cargar los datos de los pokemons al montar el componente
  }, []); // La dependencia vacía asegura que esta función se ejecute solo una vez al montar el componente

  // Función para manejar el clic en una tarjeta específica
  const handleCardClick = (index) => {
    // Comenzar el temporizador cuando se hace clic en la primera tarjeta
    if (!timerRunning) {
      setTimerRunning(true);
    }

    // Ignorar clics en tarjetas que ya están emparejadas o ya están volteadas
    if (matchedIndexes.includes(index) || visibleCards[index]) {
      return;
    }

    // Incrementar contador de clics
    setClicks(prevClicks => {
      const newClicks = [...prevClicks]; // Copia el array de clics
      newClicks[index] += 1; // Incrementa el contador de clics en la posición index
      return newClicks;
    });
    incrementTotalClicks(); // Incrementa el número total de clics

    // Mostrar la tarjeta si está oculta
    setVisibleCards(prevVisibleCards => {
      const newVisibleCards = [...prevVisibleCards];
      newVisibleCards[index] = true;
      return newVisibleCards;
    });

    // Si ya hay una tarjeta seleccionada y no coincide con la actual, comprobar si coinciden
    if (selectedCard !== null && selectedCard !== index) {
      const selectedPokemon = pokemons[selectedCard];
      const currentPokemon = pokemons[index];
      if (selectedPokemon.id === currentPokemon.id) {
        // Si las tarjetas coinciden, añadir ambas a las coincidencias
        setMatchedIndexes(prevMatchedIndexes => [...prevMatchedIndexes, selectedCard, index]);
        // Incrementar la puntuación
        setScore(prevScore => prevScore + 1);
      } else {
        // Si las tarjetas no coinciden, ocultarlas después de un segundo
        setTimeout(() => {
          setVisibleCards(prevVisibleCards => {
            const newVisibleCards = [...prevVisibleCards];
            newVisibleCards[selectedCard] = false;
            newVisibleCards[index] = false;
            return newVisibleCards;
          });
        }, 1000);
      }
      setSelectedCard(null); // Reiniciar la tarjeta seleccionada después de comprobar
    } else {
      setSelectedCard(index); // Si no hay tarjeta seleccionada, establecer la actual como seleccionada
    }
  };

  // Función para desordenar la matriz de pokemons
  const shufflePokemons = () => {
    const shuffledPokemons = [...pokemons].sort(() => Math.random() - 0.5);
    setPokemons(shuffledPokemons);
  };

  useEffect(() => {
    shufflePokemons(); // Desordena las tarjetas al montar el componente
  }, []);

  // Función para decrementar el tiempo restante cada segundo
  useEffect(() => {
    let timer;
    if (timerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    }

    // Limpiar el intervalo cuando el tiempo llega a cero o el temporizador se detiene
    return () => clearInterval(timer);
  }, [timerRunning, timeLeft]);

  useEffect(() => {
    // Si el tiempo llega a cero, reiniciar el juego volteando todas las tarjetas
    if (timeLeft === 0) {
      setVisibleCards(Array(18).fill(false));
      setTimeLeft(20);
      setTimerRunning(false);
    }
  }, [timeLeft]);

  return (
    <div className="container mx-auto">
      <h1 className="mt-5 mb-4 text-center text-3xl font-bold">MEMORY VIRI</h1>
      <div className="text-center text-lg font-semibold">Tiempo restante: {timeLeft} segundos</div>
      <div className="text-center text-lg font-semibold">Puntuación: {score}</div>

      <div className="grid grid-cols-6 gap-4">
        {pokemons.map((pokemon, index) => (
          <div className="col-span-1" key={index} onClick={() => handleCardClick(index)}>
            <div className="card bg-gray-800 rounded-lg shadow-md">
              <div className={`card-inner ${visibleCards[index] ? 'is-flipped' : ''}`}>
                <div className="front">
                  Memory
                </div>
                <div className="back">
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24" />
                  <p className="mt-2 text-center text-sm font-semibold">{pokemon.name}</p>
                  <p className="text-xs text-gray-400">Clics: {clicks[index]}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
