import React, {Component} from 'react';
import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';


class CurrentWeatherCard extends Component {
  constructor(props) {
    super();
  }
  
  render () {
    const weatherData = this.props.locationWeather.currentWeather;
    return (
      <div className='CurrentWeather'>
        <h1 className='current-temp'>{Math.round(weatherData.currentTemp)}°</h1>
        <h2 className='shortSummary'> {weatherData.currentWeatherShortSummary}</h2>
        <div className='high-and-low'>
          <h3 className='high-temp'>{weatherData.highTemperature}°</h3>
          <h3 className='low-temp'>{weatherData.lowTemperature}°</h3>
        </div>
        <article className='longSummary'>{weatherData.currentWeatherLongSummary}</article>
        <div className='view-buttons'>
          <button className = 'forecastButton' onClick={this.props.showSevenHour}> 7 hour forecast </button>
          <button className = 'forecastButton tenDayButton' onClick={this.props.showTen}> 10 day forecast</button>
        </div>
        {this.props.tenDayClicked ? TenDayForecast(this.props.locationWeather.tenDayWeather) : null}
        {this.props.sevenHourClicked ? SevenHourForecast(this.props.locationWeather.sevenHourWeather) : null}  
      </div>
    );
  }
}

export default CurrentWeatherCard;