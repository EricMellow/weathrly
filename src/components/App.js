import Background from './Background';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import './styles/App.css'
import React, { Component } from 'react';
import DataCleaner from './DataCleaner';
import getData from './GetData';
import Welcome from './Welcome';

const weatherData = new DataCleaner;

class App extends Component {
  constructor() {
    super();
    this.state = {
      welcome: true,
      location: weatherData.currentLocation,
      currentTemp: weatherData.currentTemp,
      highTemperature: weatherData.highTemperature,
      lowTemperature: weatherData.lowTemperature,
      currentWeatherLongSummary: weatherData.currentWeatherLongSummary,
      currentWeatherShortSummary: weatherData.currentWeatherShortSummary
    };
    this.changeWelcomeState = this.changeWelcomeState.bind(this);
  }
 
  changeWelcomeState() {
    this.setState({
      welcome: false
    })
  }

  render() {
    if (this.state.welcome) {
      return (<Welcome changeWelcomeState = {this.changeWelcomeState}/>)
    } else {
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
}

export default App;

