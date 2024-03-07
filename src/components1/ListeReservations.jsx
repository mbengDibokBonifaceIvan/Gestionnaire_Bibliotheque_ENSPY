import React, { useState, useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
import firebase from '../metro.config';
import styled from "styled-components";
import Loading from "./Loading";
import Sidebar from '../components1/Sidebar';
import Navbar from '../components1/Navbar';
//import Timer1 from "../Component Improvements/Timer1";
import { FaClock } from 'react-icons/fa';


    //update
    function updates(dos){
      const ref = firebase.firestore().collection("BiblioUser")
      if( dos.etat == 'bloc'){
      ref
      .doc(dos.email)
      .update({etat:'ras'})
      .catch((err)=>{
        console.log(err)
      })}
    
      if( dos.etat != 'bloc'){
        ref
        .doc(dos.email)
        .update({etat:'bloc'})
        .catch((err)=>{
          console.log(err)
        })}
      
    }
    //fin update
    





const Timer1 = () => {

  //const ref = firebase.firestore().collection("BiblioUser");

   const [timeRemaining, setTimeRemaining] = useState(3 * 24 * 60 * 60); // 3 jours en secondes
 
   useEffect(() => {
 
 
     const interval = setInterval(() => {
       setTimeRemaining((prevTime) => prevTime - 1);
     }, 1000); // Mise à jour toutes les secondes
 
     const timer = setTimeout(() => {
     //  setVariable('nouvelle valeur après 3 jours');
     interval();
     }, 3 * 24 * 60 * 60 * 1000); // 3 jours en millisecondes
 
 
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
       
       <p>Delai: {formatTime(timeRemaining)}</p>
       <FaClock size={15} />
     </div>
   );
 };
 

function ListeReservations() {

  //debut firebase

  const ref = firebase.firestore().collection("BiblioUser")

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)

  console.log('dans liste de reservation', data)

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
        setLoader(true)
      })
      setData(items)

    })
  }



  useEffect(() => {
    getData()
    //    console.log('mes dataaaaaaa aaaaaaaa dans Ccformationnnn',data)
  }, [])

  //    console.log('mes dataaaaaaa aaaaaaaa dans Ccformationnnn',data)


  //firebase fin


  //update
  function updates(dos) {
    const ref = firebase.firestore().collection("BiblioUser")
    if (dos.etat == 'bloc') {
      ref
        .doc(dos.matricule)
        .update({ etat: 'ras' })
        .catch((err) => {
          console.log(err)
        })
    }

    if (dos.etat != 'bloc') {
      ref
        .doc(dos.matricule)
        .update({ etat: 'bloc' })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  //date
  const d = new Date();


  //reserve1

  function reserv1(dos) {
    const ref = firebase.firestore().collection("BiblioUser")
    if (dos.etat1 === 'reserv') {
      ref
        .doc(dos.email)
        .update({ etat1: 'emprunt', tabEtat1: [dos.tabEtat1[0], dos.tabEtat1[1], dos.tabEtat1[2], dos.tabEtat1[3], dos.tabEtat1[4], Date(d.seconds * 1000)] })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  //reserve2
  function reserv2(dos) {
    const ref = firebase.firestore().collection("BiblioUser")
    if (dos.etat2 === 'reserv') {
      ref
        .doc(dos.email)
        .update({ etat2: 'emprunt', tabEtat2: [dos.tabEtat2[0], dos.tabEtat2[1], dos.tabEtat2[2], dos.tabEtat2[3], dos.tabEtat2[4], Date(d.seconds * 1000)] })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  //reserve3
  function reserv3(dos) {
    const ref = firebase.firestore().collection("BiblioUser")
    if (dos.etat3 === 'reserv') {
      ref
        .doc(dos.email)
        .update({ etat3: 'emprunt', tabEtat3: [dos.tabEtat3[0], dos.tabEtat3[1], dos.tabEtat3[2], dos.tabEtat3[3], dos.tabEtat3[4], Date(d.seconds * 1000)] })
        .catch((err) => {
          console.log(err)
        })
    }
  }



  return (
    <>
      <Sidebar />
      <Navbar />
      <Section>
        {loader ?
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Classe</th>
                <th>Document 1</th>
                <th>Document 2</th>
                <th>Document 3</th>

                <th>Etat</th>
              </tr>
            </thead>
            <tbody>
              {data.map((doc, index) => {
                if (doc.etat1 === 'reserv' || doc.etat2 === 'reserv' || doc.etat3 === 'reserv')
                  return (
                    <tr key={doc.id}>
                      <td>{index + 1}</td>
                      <td>{doc.name}</td>
                      <td>{doc.niveau}</td>
                      <td>
                        <h4>
                          {doc.etat1 === 'reserv' ? doc.tabEtat1[0] + '\n' : ""}
                        </h4>
                        
                       <span> {doc.etat1 === 'reserv' ? (doc.tabEtat1[5]).toLocaleString().slice(0, 16) + '\n' : ""}
                      
                        {doc.etat1 === 'reserv' ? <div>
                          <Timer1 />
                        </div> : ""}
                        </span>
                        
                        

                        <div>

                          
                          {/** (timeRemaining == 0) ? etudiant.etat = "bloc";
                      */}       
                          {doc.etat1 === 'reserv' ?
                            <Button title="Confirmer la reservation de l etudiant ici"
                              style={{ backgroundColor: 'green', marginTop: '10px', fontWeight: 'bold' }}
                              variant="secondary"
                              className="btn-sm"
                              onClick={() => { reserv1(doc) }}
                            >
                              Valider
                            </Button>
                            : 'Espace disponible pour une réservation'}</div>

                      </td>
                      <td>
                        <h4>
                          {doc.etat2 === 'reserv' ? doc.tabEtat2[0] + '\n' : ''}
                        </h4>
                        {doc.etat2 === 'reserv' ? (doc.tabEtat2[5]).toLocaleString().slice(0, 16) + '\n' : ''}
                      
                        {doc.etat2 === 'reserv' ?  <div>
                          <Timer1 />
                        </div>: ''}
                      
                       
                        <div>
                          {doc.etat2 === 'reserv' ?
                            <Button title="Confirmer la reservation de l etudiant ici"
                              style={{ backgroundColor: 'green', marginTop: '10px', fontWeight: 'bold' }}
                              variant="secondary"
                              className="btn-sm"
                              onClick={() => { reserv2(doc) }}
                            >
                              Valider
                            </Button>
                            : 'Espace disponible pour une réservation'}</div>

                      </td>
                      <td>
                        <h4>
                          {doc.etat3 === 'reserv' ? doc.tabEtat3[0] + '\n' : ''}
                        </h4>
                        {doc.etat3 === 'reserv' ? (doc.tabEtat3[5]).toLocaleString().slice(0, 16) + '\n' : ''}
                       
                        {doc.etat3 === 'reserv' ? <div>
                          <Timer1 />
                        </div> : ""}

                        <div>
                          {doc.etat3 === 'reserv' ?
                            <Button title="Confirmer la reservation de l etudiant ici"
                              style={{ backgroundColor: 'green', marginTop: '10px', fontWeight: 'bold' }}
                              variant="secondary"
                              className="btn-sm"
                              onClick={() => { reserv3(doc) }}
                            >
                              Valider
                            </Button>
                            : 'Espace disponible pour une réservation'}
                        </div>

                      </td>

                      <td>{doc.etat}</td>

                    </tr>
                  );
              })}
            </tbody>
          </Table> : <Loading />}
      </Section>
    </>
  );
}

export default ListeReservations;

const Section = styled.section`
    overflow:auto;
    margin-top: 40px;
    margin-bottom: 20px;
  `