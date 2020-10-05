import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';


function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>NewsForAll </Text>
        <Image
        style={styles.tinyLogo}
        source={require('./news.png')}
      />
      </View>
    );
  };
  const styles = StyleSheet.create({
    header:{
      flexDirection:'row',
      backgroundColor:'#e7e7de',
      justifyContent:'center',
      alignItems:'center',
      height:60

    },
    headerText:{
      fontSize:28,
      fontFamily:'PlayfairDisplay-Bold'
    },
    tinyLogo:{
      width:35,
      height:35
    }
  });

  export default Header