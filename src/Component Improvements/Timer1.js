import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';

const Timer1 = () => {
 // const [variable, setVariable] = useState('valeur initiale');
  const [timeRemaining, setTimeRemaining] = useState(3 * 24 * 60 * 60); // 3 jours en secondes

  useEffect(() => {
    const timer = setTimeout(() => {
    //  setVariable('nouvelle valeur après 3 jours');
    }, 3 * 24 * 60 * 60 * 1000); // 3 jours en millisecondes

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000); // Mise à jour toutes les secondes

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;

    return `${days}j ${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div>
      _{/**<p>Valeur actuelle de la variable : {variable}</p> */}
      <p>Temps restant : {formatTime(timeRemaining)}</p>
      <FaClock size={15} />
    </div>
  );
};

export default Timer1;