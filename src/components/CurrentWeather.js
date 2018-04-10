import React, { Component } from 'react';
import './styles/Current-weather.css';
import TenDayForecast from './TenDayForecast';

class CurrentWeather extends Component {
  constructor () {
    super()
    this.state ={
      tenDayClicked: false
    }
    this.showTen = this.showTen.bind(this)
  }

  showTen (){
   this.setState({
     tenDayClicked: true
   })
  }
    
  render() {
    return (
      <div className = 'CurrentWeather'> 
        <h1 className = 'current-temp'>23°</h1>
      <h2> Partly Cloudy </h2>
        <div className = 'high-and-low'> 
          <h3>42°</h3>
          <h3 className = 'low-temp'>13°</h3>
        </div>
        <article>Today's weather is going to be windy af, but it will also be sunny and warm, so that's kinda cool, right?!</article>
        <div className = 'view-buttons'> 
          <button> 7 hour forecast </button>
          <button onClick ={this.showTen}> 10 day forecast</button>
        </div>
          {this.state.tenDayClicked ? <TenDayForecast /> : null}  
    </div>
    );
  };
}

export default CurrentWeather;