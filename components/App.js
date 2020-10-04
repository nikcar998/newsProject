/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Axios from 'axios';
import _ from 'lodash'
import Header from './Header/Header'

function App() {
  const [result,setResult]=useState("")
useEffect(() =>{
  var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=d2eb5fc8741647b3b0be376ab59c7d69';
          var req = new Request(url);
Axios.get(url)
 .then(data=>{
   console.log(_.get(data,'status','non trovato'));
   const data1=_.get(data,'data.articles[0].urlToImage',"not found");
   setResult(data1);
   console.log(result)
 }).catch(error => {
   console.log(error)
 })
  },[])
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{
          uri: result,
        }}
      />
      <Text>hello world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'column'
  },
  cardImage:{
    width:50,
    height:50
  },
  card:{
    width:200,
    height:500
  }
});

export default App;
