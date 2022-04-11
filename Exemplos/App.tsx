import React from "react";
import { StatusBar ,Text , View } from "react-native";


export default class App extends React.Component{
  render(){
    return(
      <View>
        <Text>Olá mundo</Text>
        <StatusBar/>
      </View>
    )
  }
}

