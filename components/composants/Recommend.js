import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import BigRect from './BigRect'

const WIDTH = Dimensions.get('window').height

const Recommend = () => {
  return (
    <ScrollView>
        <View style={{height:50,alignSelf:'center',backgroundColor:'#DCDCDC',width:WIDTH}}>
            <Text style={{textAlign:'center',fontWeight:'600',fontFamily:'Georgia',marginTop:10,fontSize:20}}>Les meilleurs PC2022</Text>
        </View>
      <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
        <BigRect />
        <BigRect />
        <BigRect />
        <BigRect />
        <BigRect />
        <BigRect />
        <BigRect />
        <BigRect />
        <BigRect />
        <BigRect />
      </View>
    </ScrollView>
  )
}

export default Recommend