import Background from './Background';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import TenDayForecast from './TenDayForecast';
import './styles/App.css'
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
 
  render() {
    return (
      <div className ='App'>
        <Background />
        <CurrentWeather />
        {/* <div className = 'forecast'> 
          <TenDayForecast />
        </div>        */}
      </div>
    );
  }
}

export default App;

