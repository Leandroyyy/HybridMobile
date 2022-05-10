import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ImageBackground, ActivityIndicator } from 'react-native';
import getImage from './utils/ImagesForWeather';
import { SearchInput } from './components/SearchInput'
import React from 'react';
import { fetchLocationId, fetchWeather } from './utils/api';

export default class App extends React.Component {
  state = {
    loading: false,
    error: false,
    location: '',
    weather: '',
    temperature: 0,
  }

  componentDidMount() {
    this.handleUpdateLocation('San Francisco')
  }

  handleUpdateLocation = async (city: string) => {
    if (!city) return


    this.setState({ loading: true }, async () => {
      try {
        const locationID = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(locationID);

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature
        })
      } catch (e) {
        this.setState({ loading: false, error: true })
      }
    })
  }

  renderContent() {
    const { error } = this.state

    return (
      <View>
        {error && 
          <Text style={[styles.smallText, styles.textStyle]}>
            Could not load weather, please try a different city.
          </Text>
        }
        {!error && this.renderInfo()}
        <SearchInput
          placeholder="Search any city"
          onSubmit={this.handleUpdateLocation}
        />
      </View>
    )
  }

  renderInfo() {
    const { location, weather, temperature } = this.state
    return (
      <View>
        <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
        <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
        <Text style={[styles.largeText, styles.textStyle]}>
          {`${Math.round(temperature)}°`}
        </Text>
      </View>
    )
  }

  render() {
    const { loading, error, location, weather, temperature } = this.state
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageContainer}
          imageStyle={styles.image}
          source={getImage(weather)}
        >
          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={loading} color='white' size='large' />
            <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
            <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
            <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature)}`}</Text>

            {!loading && this.renderContent()}
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
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.2)'
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
