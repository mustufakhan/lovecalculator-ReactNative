import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Appbar ,Button } from 'react-native-paper';
import Display from './Components/Display'

class App extends React.Component{
  state={
    fname:'',
    sname:'',
    data:"loading..."
  }
  Submit(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname  }`,
    {
      headers:{
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "ef10621dfemsh4ee9c5053e18616p1920d9jsna40029a86b11"
      }
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      this.setState({
        data:result
      })
    })
  }
  render(){
    return(
      <View style={styles.container}>
         <Appbar.Header>
        
        <Appbar.Content
          title="calculate"
         
        />
              </Appbar.Header>
         <TextInput
        label='fname'
        value={this.state.fname}
        onChangeText={text => this.setState({ fname:text })}
      />
      <TextInput
        label='sname'
        value={this.state.sname}
        onChangeText={text => this.setState({ sname:text })}
      />

      <Button  mode="contained" onPress={() => this.Submit()}>
    Press me
  </Button>
  <Display data={this.state.data}/>
      </View>
    )
  }
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
