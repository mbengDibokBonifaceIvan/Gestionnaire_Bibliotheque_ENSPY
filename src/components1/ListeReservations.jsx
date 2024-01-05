import React, {useState, useEffect} from "react";
import {Table, Button} from 'react-bootstrap';
import firebase from '../metro.config';
import styled from "styled-components";
import Loading from "./Loading";
import Sidebar from '../components1/Sidebar';
import Navbar from '../components1/Navbar';

function ListeReservations() {

  //debut firebase

  const ref = firebase.firestore().collection("BiblioUser")

  const [data,setData]=useState([])
  const [loader,setLoader] = useState(false)

console.log('dans liste de reservation',data)
 
  function getData(){
   ref.onSnapshot((querySnapshot) => {
     const items = []
     querySnapshot.forEach((doc) => {
       items.push(doc.data())
       setLoader(true)
     })
     setData(items)
     
   })
  }

 
 
  useEffect(() =>{
   getData()
//    console.log('mes dataaaaaaa aaaaaaaa dans Ccformationnnn',data)
  },[])

//    console.log('mes dataaaaaaa aaaaaaaa dans Ccformationnnn',data)


 //firebase fin


 //update
 function updates(dos){
  const ref = firebase.firestore().collection("BiblioUser")
  if( dos.etat == 'bloc'){
  ref
  .doc(dos.matricule)
  .update({etat:'ras'})
  .catch((err)=>{
    console.log(err)
  })}

  if( dos.etat != 'bloc'){
    ref
    .doc(dos.matricule)
    .update({etat:'bloc'})
    .catch((err)=>{
      console.log(err)
    })}
 }
     //date
const d=new Date();


    //reserve1

 function reserv1(dos){
  const ref = firebase.firestore().collection("BiblioUser")
  if( dos.etat1 === 'reserv'){
  ref
  .doc(dos.email)
  .update({etat1:'emprunt',tabEtat1:[dos.tabEtat1[0],dos.tabEtat1[1],dos.tabEtat1[2],dos.tabEtat1[3],dos.tabEtat1[4],Date(d.seconds*1000)]})
  .catch((err)=>{
    console.log(err)
  })}          
}

  //reserve2
  function reserv2(dos){
   const ref = firebase.firestore().collection("BiblioUser")
   if( dos.etat2 === 'reserv'){
   ref
   .doc(dos.email)
   .update({etat2:'emprunt',tabEtat2:[dos.tabEtat2[0],dos.tabEtat2[1],dos.tabEtat2[2],dos.tabEtat2[3],dos.tabEtat2[4],Date(d.seconds*1000)]})
   .catch((err)=>{
     console.log(err)
   })}          
 }

  //reserve3
  function reserv3(dos){
   const ref = firebase.firestore().collection("BiblioUser")
   if( dos.etat3 === 'reserv'){
   ref
   .doc(dos.email)
   .update({etat3:'emprunt',tabEtat3:[dos.tabEtat3[0],dos.tabEtat3[1],dos.tabEtat3[2],dos.tabEtat3[3],dos.tabEtat3[4],Date(d.seconds*1000)]})
   .catch((err)=>{
     console.log(err)
   })}          
 }



    return (
      <>
    <Sidebar />
    <Navbar />
      <Section>
        {loader ? 
      <Table striped bordered hover >
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
        {data.map((doc, index) =>{
        if(doc.etat1 ==='reserv' || doc.etat2 ==='reserv' || doc.etat3 ==='reserv')
        return (
          <tr key={doc.id}>
            <td>{index + 1}</td>
            <td>{doc.name}</td>
            <td>{doc.niveau}</td>
            <td>
            <h4>
            { doc.etat1 === 'reserv' ?  doc.tabEtat1[0] + '\n' : ""}
            </h4>
            { doc.etat1 === 'reserv' ? (doc.tabEtat1[5]).toLocaleString().slice(0,16)+'\n' : ""}
            <div>
            { doc.etat1 === 'reserv' ? 
                <Button
                style={{backgroundColor:'green', marginTop:'10px', fontWeight:'bold'}}
                    variant="secondary"
                    className="btn-sm"
                    onClick={()=>{reserv1(doc)}}
                  >
                  Emprunter
                  </Button>
                  : 'Espace disponible pour une réservation'}</div>
              
            </td>
            <td>
              <h4>
              { doc.etat2 === 'reserv' ?  doc.tabEtat2[0] + '\n':'' }
              </h4>
              { doc.etat2 === 'reserv' ? (doc.tabEtat2[5]).toLocaleString().slice(0,16)+'\n':''}
                 <div>
                  { doc.etat2 === 'reserv' ? 
                     <Button
                     style={{backgroundColor:'green', marginTop:'10px', fontWeight:'bold'}}
                     variant="secondary"
                         className="btn-sm"
                         onClick={()=>{reserv2(doc)}}
                       >
                       Emprunter
                       </Button>
                       : 'Espace disponible pour une réservation'}</div> 
            
            </td>
            <td>
            <h4>
              { doc.etat3 === 'reserv' ?  doc.tabEtat3[0]  + '\n' :'' }
              </h4>
              { doc.etat3 === 'reserv' ? (doc.tabEtat3[5]).toLocaleString().slice(0,16) + '\n':''}
              <div>
              { doc.etat3 ==='reserv' ? 
                    <Button
                    style={{backgroundColor:'green', marginTop:'10px', fontWeight:'bold'}}
                    variant="secondary"
                        className="btn-sm"
                        onClick={()=>{reserv3(doc)}}
                      >
                      Emprunter
                      </Button>
                      : 'Espace disponible pour une réservation'}
            </div>
              
            </td>
          
            <td>{doc.etat}</td>
            
          </tr>
          );
        })}
        </tbody>
      </Table>: <Loading /> }
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