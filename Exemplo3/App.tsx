import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';

export default class App extends React.Component {

  state = { 
    loading:false
  }

  render() {
    const {loading} = this.state

    return (
      <>      
        <View>
          <ActivityIndicator color='blue' size="large" animating={loading}/>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.setState({loading:!loading})}>
            <Text>Animar</Text>
          </TouchableOpacity>
        </View>
        <ScrollView onScrollBeginDrag={() => alert('iniciou a rolagem')}>
          <Image source={{ uri : "https://source.unsplash.com/random" }} style={{ alignSelf: 'center', width: 300, height: 200 }}/>
          <Image source={{ uri : "https://source.unsplash.com/random" }} style={{ alignSelf: 'center', width: 300, height: 200 }}/>
          <Image source={{ uri : "https://source.unsplash.com/random" }} style={{ alignSelf: 'center', width: 300, height: 200 }}/>
          <Image source={{ uri : "https://source.unsplash.com/random" }} style={{ alignSelf: 'center', width: 300, height: 200 }}/>
          <Image source={{ uri : "https://source.unsplash.com/random" }} style={{ alignSelf: 'center', width: 300, height: 200 }}/>
        </ScrollView>
        <StatusBar style="auto" />
      </>

    );
  }

}

