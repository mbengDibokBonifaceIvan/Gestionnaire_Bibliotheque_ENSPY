import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';
import firebase from '../metro.config'

const Timer1 = () => {

  const ref = firebase.firestore().collection("BiblioUser");

   const [timeRemaining, setTimeRemaining] = useState(14 * 24 * 60 * 60); // 14 jours en secondes
 
   useEffect(() => {
 
 
     const interval = setInterval(() => {
       setTimeRemaining((prevTime) => prevTime - 1);
     }, 1000); // Mise à jour toutes les secondes
 
     const timer = setTimeout(() => {
     interval();
     }, 14 * 24 * 60 * 60 * 1000); // 14 jours en millisecondes
 
 
     return () => {
       clearTimeout(timer);
       clearInterval(interval);
     };
   }, []);
 

   // Pour bloquer l etdudiant s il ne remet pas le document a temps
const blocage_automatique =(timeRemaining) => {

  if( timeRemaining === 0){
    ref.update({etat:'bloc'})
    .catch((err)=>{
      console.log(err)
    })}

};

   const formatTime = (seconds) => {
     const days = Math.floor(seconds / (24 * 60 * 60));
     const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
     const minutes = Math.floor((seconds % (60 * 60)) / 60);
     const remainingSeconds = seconds % 60;
     //blocage_automatique(remainingSeconds);
     return `${days}j ${hours}h ${minutes}m ${remainingSeconds}s`;
   };
 
   return (
     <div>
       <span>{blocage_automatique(timeRemaining)}</span>
       <p>Delai: {formatTime(timeRemaining)}</p>
       <FaClock size={15} />
     </div>
   );
 };

export default Timer1;