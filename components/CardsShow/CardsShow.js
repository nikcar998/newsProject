import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

/** in questo component mi limito a ricevere i valori ottenuti dalla funzione map
 * all'interno del componente in 'App.js'. Unica funzione importante è OnPress attraverso la quale
 * permetto l'apertura del link ricevuto dalle props. () */
function CardsShow(props){
        const url=props.url
            const OnPress = useCallback(async () => {
              //prima di avviare la funzione mi assicuro che il valore delle props sia arrivato correttamente
                if(url!== 'not found'){
                // controllo se il link è supportato 
                const supported = await Linking.canOpenURL(url);
            
                if (supported) {
                  await Linking.openURL(props.url);
                } else {
                  Alert.alert(`Don't know how to open this URL: ${url}`);
                }
              }else {
                Alert.alert(`There has been an error`);
              }
            }, [url]);
        
    
    //qui modifico il formato della data ricevuto dall'api e lo rendo più leggibile
    const ts = new Date(props.dated);
    const dated=ts.toDateString();
   return ( <TouchableOpacity onPress={OnPress} style={styles.card}>
      <View style={styles.leftContainer}>
      <Image
        style={styles.cardImage}
        source={{
          uri: props.urlToImage,
        }}
      />
      <Text style={styles.cardDescription}>Publicated by:  {props.source}</Text>
      <Text style={styles.cardDescription}>Published: {dated}</Text>
      <Text style={styles.cardDescription}>Author: {props.author}</Text>
      </View>
      <View style={styles.rightContainer}>
      <Text style={styles.cardTitle}>{props.titled}</Text>
      <Text style={styles.cardDescription}>{props.description}</Text>
      </View>
      </TouchableOpacity>
   )}

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        padding:'2%',
        backgroundColor:'#e7e7de',
        margin:'2%',
        borderRadius:4
      },
      cardImage:{
        width:120,
        height:120,
      },
      leftContainer:{
        flex:0.5,
        flexDirection:'column',
        borderRightWidth:1,
        borderRightColor:'black',
      },
      rightContainer:{
        flex:1,
        flexDirection:'column',
        marginLeft:'1%'
      },
      cardTitle:{
        fontSize:19,
        fontFamily:'PlayfairDisplay-SemiBold', 
      },
      cardDescription:{
        fontFamily:'PlayfairDisplay-Regular'
      }
})

export default CardsShow