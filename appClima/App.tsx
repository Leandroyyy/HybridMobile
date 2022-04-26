import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import getImage from './utils/ImagesForWeather';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        imageStyle={styles.image}
        source={getImage('Snow')}
      >
        <View style={styles.detailsContainer}>
        <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
        <Text style={[styles.largeText , styles.textStyle]}>24°</Text>
        <TextInput
          style={styles.input}
          placeholder="Search any city"
          placeholderTextColor="white"
        />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
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
    backgroundColor:'rgba(0,0,0,0.3)'
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
  input: {
    backgroundColor: '#666',
    color: 'white',
    fontSize: 30,
    width: 300,
    marginTop: 30,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center'
  }
});
