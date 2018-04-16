import React, { Component } from 'react';
import './styles/Current-weather.css';
import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';
import CurrentWeatherCard from './CurrentWeatherCard';

class CurrentWeather extends Component {
  constructor (props) {
    super();
    this.state = {
      tenDayClicked: false,
      sevenHourClicked: false
    };
    this.showTen = this.showTen.bind(this);
    this.showSevenHour = this.showSevenHour.bind(this);
  }

  showTen() {
    if (this.state.sevenHourClicked) {
      this.setState ({
        sevenHourClicked: false
      });
    }
    this.setState({
      tenDayClicked: !this.state.tenDayClicked
    });
  }

  showSevenHour () {
    if (this.state.tenDayClicked) {
      this.setState ({
        tenDayClicked: false
      });
    }
    this.setState({
      sevenHourClicked: !this.state.sevenHourClicked
    });
  }
    
  render () {
    return (
      <CurrentWeatherCard  locationWeather = {this.props.locationWeather}
        tenDayClicked = {this.state.tenDayClicked} 
        sevenHourClicked = {this.state.sevenHourClicked}
        showSevenHour = {this.showSevenHour}
        showTen = {this.showTen}
      />
    );
  }
}

export default CurrentWeather;