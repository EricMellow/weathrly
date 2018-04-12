import React, { Component } from 'react';
import './styles/Current-weather.css';
import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';

class CurrentWeather extends Component {
  constructor (props) {
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
        <h1 className='current-temp'>{this.props.currentTemp}°</h1>
        <h2> {this.props.currentWeatherShortSummary}</h2>
        <div className='high-and-low'>
          <h3>{this.props.highTemperature}°</h3>
          <h3 className='low-temp'>{this.props.lowTemperature}°</h3>
        </div>
        <article>{this.props.currentWeatherLongSummary}</article>
        <div className='view-buttons'>
          <button className = 'displayCard' onClick={this.showSevenHour}> 7 hour forecast </button>
          <button className = 'displayCard' onClick={this.showTen}> 10 day forecast</button>
        </div>
        {this.state.tenDayClicked ? <TenDayForecast /> : null}
        {this.state.sevenHourClicked ? <SevenHourForecast /> : null}
        
      </div>
    );
  };
}

export default CurrentWeather;