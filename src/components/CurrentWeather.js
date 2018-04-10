import React, { Component } from 'react';
import './styles/Current-weather.css';
import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';


class CurrentWeather extends Component {
  constructor () {
    super()
    this.state ={
      tenDayClicked: false,
      sevenHourClicked: false
    }
    this.showTen = this.showTen.bind(this)
    this.showSevenHour = this.showSevenHour.bind(this)
  }

  showTen() {
    if(this.state.sevenHourClicked){
      this.setState ({
        sevenHourClicked: false
      })
    }
    this.setState({
      tenDayClicked: !this.state.tenDayClicked
    })
  }

  showSevenHour () {
    if(this.state.tenDayClicked){
      this.setState ({
        tenDayClicked: false
      })
    }
    this.setState({
      sevenHourClicked: !this.state.sevenHourClicked
    })
  }
    
  render () {
    return (
      <div className='CurrentWeather'>
        <h1 className='current-temp'>23°</h1>
        <h2> Partly Cloudy </h2>
        <div className='high-and-low'>
          <h3>42°</h3>
          <h3 className='low-temp'>13°</h3>
        </div>
        <article>Today's weather is going to be windy af, but it will also be sunny and warm, so that's kinda cool, right?!</article>
        <div className='view-buttons'>
          <button onClick={this.showSevenHour}> 7 hour forecast </button>
          <button onClick={this.showTen}> 10 day forecast</button>
        </div>
        {this.state.tenDayClicked ? <TenDayForecast /> : null}
        {this.state.sevenHourClicked ? <SevenHourForecast /> : null}
        
      </div>
    );
  };
}

export default CurrentWeather;