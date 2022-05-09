import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import getImage from './utils/ImagesForWeather';
import {SearchInput} from './components/SearchInput'
import React from 'react';

export default class App extends React.Component {
  state={
    location: ''
  }

  componentDidMount(){
    this.handleUpdateSubmit('San Francisco')
  }

  handleUpdateSubmit = (city:string) => {
    this.setState({location:city})
  }

  render(){
    const {location} = this.state
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        imageStyle={styles.image}
        source={getImage('Heavy Rain')}
      >
        <View style={styles.detailsContainer}>
        <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
        <Text style={[styles.largeText , styles.textStyle]}>24°</Text>
        <SearchInput 
        placeholder="Location"
        onSubmit={this.handleUpdateSubmit}
        />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  detailsContainer:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:20,
    backgroundColor:'rgba(0,0,0,0.2)'
  },
  image: {
    flex: 1,
    width: 'null',
    height: 'null',
    resizeMode: 'cover'
  },
  largeText: {
    fontSize: 40
  },
  smallText: {
    fontSize: 22
  },
  textStyle: {
    textAlign: 'center',
    color: 'white'
  },
});
