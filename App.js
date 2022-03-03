import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet,Button, Text, View } from 'react-native';
import {useState} from 'react'
const list = require('./quotes.json')



export default function App() {
  const [quote,setQuote] = useState({author:'Author',quote :'quote'})
  let data =list["quotes"][Math.ceil(Math.random()*list["quotes"].length-1)]
  return (
    <View style={{height:'100%'}} >
    <View style={styles.container}>
      <Text style={{color:"white",padding:25,fontSize:25}}>{data.quote}</Text>
      <Text style={{color:"white",textAlign:'right',padding:15,fontSize:12}}>- {data.author}</Text>
     
    </View>
      <TouchableOpacity
        onPress={
          ()=>{
            setQuote(list["quotes"][Math.ceil(Math.random()*list["quotes"].length-1)])
           }
        }
    style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      position: 'absolute',
      bottom: 30,
      right:'5%',
      left:'5%',
      height: 60,
      width:'90%',
      backgroundColor: '#fff',
      borderRadius:100
    }}
  >
  <Text>Get Quote</Text>
  </TouchableOpacity>
      <StatusBar style="auto" backgroundColor='white' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'black',
    padding: 25,
    justifyContent: 'center',
    height:'100%',
    
  },
});
