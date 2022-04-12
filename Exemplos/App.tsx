import React from "react";
import { StatusBar ,Text , View, TextInput } from "react-native";

interface AppProps{
  nome:string
}

export default class App extends React.Component{
  
  state:AppProps

  constructor(props:any){
    super(props)
    this.state={
      nome:'teste'
    }
  }

  render(){
    return(
      <>
        <View style={{padding:16}}>
            <TextInput
              keyboardType='numeric'
              placeholder="informe seu nome..."
              style={{
                borderColor:'black',
                borderWidth:1,
                fontSize:30,
                paddingHorizontal:8
              }}
            />
            <Text>{this.state.nome}</Text>
          <StatusBar/>
        </View>
      </>
    )
  }
}