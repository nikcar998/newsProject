import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>NewsForAll</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    header:{
      flexDirection:'row',
      backgroundColor:'green',
      justifyContent:'center',
      alignItems:'center',
      height:75

    },
    headerText:{
      color:'blue',
      fontSize:28
    }
  });

  export default Header