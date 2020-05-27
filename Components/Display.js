import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
const Display = (props)=>{
return(
    <View style={styles.container}>
        <Text style={styles.Text}>{props.data.percentage?`${props.data.percentage}%`  : props.data }</Text>
        <Text style={styles.Text}>{props.data.result}</Text>
        <Text style={styles.Text}>Result</Text>
    </View>
)
}
export default Display
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
  
    },
    Text:{
        fontSize:30,
        textAlign:"center"
    }
  });