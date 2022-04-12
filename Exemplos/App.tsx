import React from "react";
import {Button, StyleSheet, StatusBar, Text, TextInput, View} from "react-native";

interface AppProps {
  nome: string,
  idade?: number,
}

export default class App extends React.Component {
  state: AppProps
  constructor(props: any) {
    super(props)
    this.state = {
      nome: '',
      idade: 12,
    }
  }

  mudouMensagem = (msg:string) => {
    this.setState({nome:msg})
  }

  clicouBotao = (_:any) =>{
    const {nome} = this.state
    alert(nome)
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <TextInput
          onChangeText={this.mudouMensagem} 
          style={styles.input}></TextInput>
          <Text style={styles.text}>{this.state.nome}</Text>
          <Button
          title='Clique-me'
          color='#f00'
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
    fontSize:28,
    paddingHorizontal:5,
    marginBottom:40
  },
  text:{
    textAlign:'center',
    fontSize:40
  }
})