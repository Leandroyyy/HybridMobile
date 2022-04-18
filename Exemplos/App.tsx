import React from "react";
import {Button, StyleSheet, StatusBar, TextInput, View, Alert} from "react-native";

interface AppProps {
  height:string,
  weight:string,
  result:number,
}

export default class App extends React.Component {
  state: AppProps
  constructor(props: any) {
    super(props)
    this.state = {
      height:"",
      weight:"",
      result:0,
    }
  }

  clicouBotao = () =>{
    const heightCalc:number = Number(this.state.height)
    const weightCalc:number = Number(this.state.weight)

    const result = weightCalc / (heightCalc**2)
    
    if(result < 18.5){
      alert("Você está abaixo do peso!! seu IMC: " + result)
    }else if(result < 25){
      alert("Você está no peso ideal!! seu IMC: " +  result)
    }else if(result < 30){
      alert("Você está acima do peso!! seu IMC: " + result)
    }else if(result >= 30){
      alert("Você está obeso !! seu IMC: " +  result)
    }
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <TextInput
          placeholder="Peso"
          onChangeText={weight => this.setState({weight})} 
          keyboardType='numeric'
          style={styles.input}/>
          <TextInput
          placeholder="Altura"
          onChangeText={height => this.setState({height})}
          keyboardType='numeric'
          style={styles.input}/>
          <Button
          title='Clique-me'
          color='blue'
          onPress={this.clicouBotao}
          />
          <StatusBar />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding:16
  },
  input:{
    borderColor:'gray',
    borderWidth:0.5,
    fontSize:20,
    paddingHorizontal:5,
    marginBottom:40
    
  },
  text:{
    textAlign:'center',
    fontSize:40
  }
})