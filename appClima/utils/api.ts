import axios from "axios";

export const api = axios.create({
    baseURL:'https://www.metaweather.com/api/'
  
  })
  
export const fetchLocationId = async(city:string) => {
    const response = await api.get(`location/search/?query=san${city}`).then((response)=> response.data)
    
    return response[0].woeid;
  }
  
export const fetchWeather = async (woied:string) =>{
      const response = await api.get(`location/${woied}`).then(response => response.data)
  
    const {title , consolidated_weather} = await response.json() 
    const {weather_state_name, the_temp} = consolidated_weather[0]
  
    return {
      location:title,
      weather:weather_state_name,
      temperature: the_temp
    }
  }