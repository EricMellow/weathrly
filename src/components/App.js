import Background from './Background';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import './styles/App.css'
import React, { Component } from 'react';
import DataCleaner from './DataCleaner';

const weatherData = new DataCleaner()

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: weatherData.currentLocation,
      currentTemp: weatherData.currentTemp,
      highTemperature: weatherData.highTemperature,
      lowTemperature: weatherData.lowTemperature,
      currentWeatherLongSummary: weatherData.currentWeatherLongSummary,
      currentWeatherShortSummary: weatherData.currentWeatherShortSummary
    };
  }
 
  render() {
    return (
      <div className ='App'>
        <Background />
        <Search location = {this.state.location}/>
        <CurrentWeather 
          currentTemp = {this.state.currentTemp}
          highTemperature = {this.state.highTemperature}
          lowTemperature = {this.state.lowTemperature}
          currentWeatherLongSummary = {this.state.currentWeatherLongSummary} 
          currentWeatherShortSummary = {this.state.currentWeatherShortSummary}           
        />
      </div>
    );
  }
}

export default App;

