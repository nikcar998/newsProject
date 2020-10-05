import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, ScrollView } from "react-native";

/**qui creo il mio array di riferimento per il menu scorrevole, aggiungendo un id di valori casuali 
 * da fornire come chiave */

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "US",
  },
  {
    id: "3ac68afc-c605-48rgd3-a4f8-fbd91aa97f63",
    title: "IT",
  },
  {
    id: "58694a0f-3da1-471fac-bd96-145571e29d72",
    title: "FR",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb24ba",
    title: "DE",
  },
  {
    id: "bd7acbfk-c1b1-4fwe6c2-aed5-3ad53abb24ba",
    title: "AR",
  },
  {
    id: "bdrstnsracbea-c1bwer1-46c2-aed5-3ad53abb24ba",
    title: "AT",
  },
  {
    id: "bd7acbea-c1wgb1-46c2-aed5-3ad53abb24ba",
    title: "CA",
  },
  {
    id: "bd7acbea-fg4ggc1b1-46c2-aed5-3ad53abb24ba",
    title: "GR",
  },
  {
    id: "bd7agewegwe3-c1b1-46c2-aed5-3ad53abb24ba",
    title: "JP",
  },
  {
    id: "bd724t34gfea-c1b1-46c2-aed5-3ad53abb24ba",
    title: "MX",
  },
  {
    id: "bd7acfawebea-c1b1-46c2-aed5-3ad53abb24ba",
    title: "RU",
  },
];

/**in questa funzione ricevo l'array "menu" e la possibilità di cambiare lo state "selected" del componente in
 * "App.js". Lo state sarà cambiato per farlo corrispondere al valore dell'item toccato
 */
function App(props) {

 const setSelected= props.setSelected;
  function  Item(props){
   const trueTitle= props.title.toLowerCase();
    return( <TouchableHighlight underlayColor='#838383' onPress={() => setSelected(trueTitle)} style={styles.item}>
       <Text style={styles.title}>{props.title}</Text>
     </TouchableHighlight>)
   };
   


  return (
      <ScrollView horizontal={true} contentContainerStyle={styles.menuContainer} >
        {DATA.map((DATA)=>(
            <Item key={DATA.id} title={DATA.title} />
        ))}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
    menuContainer: {
        marginTop:10
  },
  item: {
    paddingLeft: 20,
    paddingRight:20,
    paddingBottom:7,
    paddingTop:5,
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"black",
    borderRadius:50,
    marginLeft:5,
    backgroundColor:'#e7e7de'
  },
  title: {
    fontSize: 15,
  },
});

export default App;
