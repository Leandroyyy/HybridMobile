import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType,TouchableOpacity } from 'react-native'
import banana from './img/banana-shark.jpg'
import ssauro from './img/R.png'
import aranha from './img/miranha.jpg'

export default class App extends React.Component {

  state = {
    picture:banana
  }

  render(){
    return (
      <View>
        <Image source={this.state.picture} style={{alignSelf:'center', width:300, height:500}}/>
        <TouchableOpacity style={{backgroundColor:'blue',marginTop:5 , borderRadius:20, padding:10}}
        onPress={() => this.setState({picture:banana})}
        >
            <Text style={{color:'white', alignSelf:'center'}}>Imagem 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'blue',marginTop:5 ,borderRadius:20, padding:10}}
          onPress={(_) => this.setState({picture:ssauro})}
        >
            <Text style={{color:'white', alignSelf:'center'}}>Imagem 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'blue',marginTop:5 ,borderRadius:20, padding:10}}
         onPress={(_) => this.setState({picture:aranha})}
        >
            <Text style={{color:'white', alignSelf:'center'}}>Imagem 3</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
  )
}
}