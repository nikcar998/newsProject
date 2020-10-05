
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  RefreshControl
} from 'react-native';
import Axios from 'axios';
import _ from 'lodash'
import Header from './Header/Header'
import CardsShow from './CardsShow/CardsShow';
import Option from './Options/Option';
function App() {
  const [result,setResult]=useState([]);
  const [selected, setSelected] = useState('us');
  const [refreshing, setRefreshing] = React.useState(false);

/* le due funzioni che seguono servono ad effettuare il "refresh" */
  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));

  }, []);

  /*attraverso questa funzione ricevo i dati dall'api e li inserisco nello state "result" che verrà
  sfruttato dai vari componenti */
  function getValues(){
  const key='';
  var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=' + selected + '&' +
          'apiKey='+ key;
Axios.get(url)
 .then(data=>{
   console.log(_.get(data,'status','non trovato'));
   const data1=_.get(data,'data.articles',"not found");
   setResult(data1);
   return data1
 }).catch(error => {
   console.log(error)
 })
}

/*per assicurarmi un numero limitato di chiamate alla funzione ho utilizzato useEffect con gli state
refreshing e selected per dettare quando chiamare nuovamente la funzione. In teoria avrei anche potuto lasciare 
l'array vuoto ma così ho una sicurezza in più che avvenga il refresh dei dati */

  useEffect(() =>{
    getValues()
  },[refreshing, selected])

/** attraverso questo "return" mostro la mia app. E' composta da un header con nome dell'app e logo, 
 * un menu scorrevole per scegliere la nazionalità di riferimento e una funzione "map" che mostra i dati forniti 
 * dall'api
 */
  return (
    <View style={styles.container}>
      <Header />
      <Option setSelected={setSelected} />
      <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
      {result.map((article, index) => ( 
      _.get(article,'urlToImage',0) !== 0?<CardsShow 
      key={_.get(article,'url',index)}
      titled={_.get(article,'title','not found')} 
      urlToImage={article.urlToImage} 
      source={_.get(article,'source.name','not found')} 
      dated={_.get(article,'publishedAt','notFound')}
      author={_.get(article,'author','not found')}
      description={_.get(article,'description','not found')}
      url={_.get(article,'url','not found')} /> : <Text>An error has occured or the book has not been found, please try again</Text> ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
  },
});

export default App;
