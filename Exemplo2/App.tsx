import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageResizeMode, Button, ImageBackground, TouchableOpacity, Switch } from 'react-native';

interface StateProps {
  resizeMode: ImageResizeMode | undefined;
  isEnable:boolean
}

export default class App extends React.Component {
  state: StateProps = {
    resizeMode: 'repeat',
    isEnable:true
  };

  render() {
    return (

      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          resizeMode='cover'
          style={{ flex: 1, justifyContent:'center',alignItems:'center'}}
        >
          <View style={{padding:16, flexDirection:'row', alignItems:'center'}}>
            <Text style={{color:'white'}}>Ativar Opção?</Text>
            <Switch value={this.state.isEnable}
              onValueChange={() => this.setState({isEnabled: !this.state.isEnable})}
            />
          </View>
          <TouchableOpacity style={{backgroundColor:'white',borderRadius:20, padding:10}} onPress={() => alert("Pressionado!")}>
            <Text style={{fontSize:15}}>Um texto clicavel</Text>
          </TouchableOpacity>
          <View style={{ padding: 16 }}>
            <Image
              resizeMode={this.state.resizeMode}
              source={{ uri: "https://picsum.photos/id/1015/50/50.jpg" }}
              style={{ alignSelf: 'center', width: 300, height: 200 }}
            />
            <View style={{ padding: 16 }}>
              <Button
                title="Cover"
                onPress={(_) => this.setState({ resizeMode: 'cover' })}
              />
              <Button
                title="Contain"
                onPress={(_) => this.setState({ resizeMode: 'contain' })}
              />
              <Button
                title="Stretch"
                onPress={(_) => this.setState({ resizeMode: 'stretch' })}
              />
              <Button
                title="Repeat"
                onPress={(_) => this.setState({ resizeMode: 'repeat' })}
              />
              <Button
                title="Center"
                onPress={(_) => this.setState({ resizeMode: 'center' })}
              />
            </View>
            <StatusBar />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
