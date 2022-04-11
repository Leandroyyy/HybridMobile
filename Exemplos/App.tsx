import React from "react";
import { StatusBar ,Text , View, TextInput } from "react-native";


export default class App extends React.Component{
  
  
  constructor(props:any){
    super(props)
    this.state={
      nome:'leandro'
    }
  }

  render(){
    return(
      <>
        <View style={{padding:16}}>
            <TextInput
              autoFocus
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