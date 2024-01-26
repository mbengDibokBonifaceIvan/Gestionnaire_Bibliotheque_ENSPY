import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Modal } from 'react-native'
import React, { useState,useContext, useEffect, } from 'react'
import { UserContexte } from '../vues/MainContainer'
import { doc, updateDoc, arrayUnion, arrayRemove,serverTimestamp,Timestamp,getDoc } from "firebase/firestore";
import firebase from '../../config'
import { UserContext } from '../navigation/NewNav';



const BigRect = ({props,salle,desc,etagere,exemplaire,image,name,cathegorie,datUser,commentaire,nomBD,type}) => {
  
  const {modal,setModal} = useContext(UserContexte)
  const {currentUserNewNav} = useContext(UserContext)


 {/*onPress={() =>{setModalVisible(!modalVisible)}} */}
  const voirProduit = (salle,desc,etagere,exemplaire,image,name,cathegorie,datUser,commentaire,nomBD,type) =>{
    props.navigate('Produit',{
      salle:salle,
      desc:desc,
      etagere:etagere,
      exemplaire:exemplaire,
      image:image,
      name:name,
      cathegorie:cathegorie,
      datUser:datUser,
      commentaire:commentaire,
      nomBD:nomBD,
      type:type

    })
    setModal(false)

  }
  function ajouter(){
    // debut ajouter tableau
    const washingtonRef = firebase.firestore().collection("BiblioUser").doc(datUser.email)
    
    washingtonRef.update({
      docRecentRegarder: arrayUnion({"cathegorieDoc":cathegorie, "type":type })
    });
    voirProduit(salle,desc,etagere,exemplaire,image,name,cathegorie,datUser,commentaire,nomBD,type)
   }




  const [modalVisible, setModalVisible] =useState(false);
  return (
  <View style={styles.contain}>
    <View>
      <TouchableOpacity onPress={()=>ajouter()}>
        <ImageBackground style={styles.container} source={{uri:image}}>
    
        </ImageBackground>
      </TouchableOpacity>
  <View style={{flexDirection:'row',justifyContent:'space-between', alignContent:'center',alignItems:'center',width:180}}>
    <Text style={{color:'#000', fontSize:12,marginTop:5}}> {name.length > 10? name.slice(0,10)+'...': name} </Text>
    <TouchableOpacity >
      <Text style={{color:'#000', fontSize:10,marginTop:5}}> {exemplaire} ex(s)  </Text>
    </TouchableOpacity>
  </View>
  </View>
  <Modal animationType='slide'
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible)       
   }}
  >
    <TouchableOpacity onPress={() =>{setModalVisible(!modalVisible)}} style={styles.modal}>

      <TouchableOpacity onPress={() =>{setModalVisible(!modalVisible)}} style={{backgroundColor:'white',width:'60%',height:35,marginLeft:'20%',marginBottom:5,borderRadius:10}}>
      <Text style={{textAlign:'center',marginTop:10}}>pas interessé</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>{setModalVisible(!modalVisible)}} style={{backgroundColor:'white',width:'60%',height:35,marginLeft:'20%',marginTop:5,borderRadius:10}}>
      <Text style={{textAlign:'center',marginTop:10}}>image inapropriée</Text>
      </TouchableOpacity>
    </TouchableOpacity>

  </Modal>
  </View>
  )
}

const styles = StyleSheet.create({
  contain:{
    height:250,
    width:180,
   // marginTop:100,
   // marginLeft:10,
  // backgroundColor:'red',
    marginBottom:25,
    margin:5,
    shadowColor: '#171717',shadowOffset: {width: -2, height: 4},shadowOpacity: 0.4,shadowRadius: 3,

  },
  container:{
  backgroundColor:'#DCDCDC',
   borderRadius:10,
    height:230,
    width:180,
    
  },
  modal:{
    backgroundColor:'rgba(255, 0, 0, 0.2);',
    borderRadius:10,
    height:230,
    width:150,
   // marginTop:100,
    marginLeft:10,
    flexDirection:'column',
    justifyContent:'center',
  }
})

export default BigRect