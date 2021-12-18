import React,{ useState } from "react";
import {View, Text, StyleSheet} from "react-native";
import  ButtonCounter  from "./ButtonCounter";

const App =() =>{
  const [count,setCount]=useState(0);
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Count: {count}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={{marginRight:'10%'}}>  
          <ButtonCounter text='+' count={count} onCountPress={setCount} />
        </View>
        <View style={{marginLeft:'10%'}}>
          <ButtonCounter text='-' count={count} onCountPress={setCount} />
        </View>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#eee',
    justifyContent: 'space-evenly',
    alignItems: 'center'

  },
  text:{
    fontSize: 28,
    fontWeight: 'bold'
  },
  buttons:{
    flexDirection: 'row',
    alignContent: 'space-between'
  }
});

export default App;