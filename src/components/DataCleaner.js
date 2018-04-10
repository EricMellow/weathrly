import React, {Component} from 'react';
import data from './Data'

class DataCleaner extends Component {
  constructor () {
    super ()
    this.currentTemp = data.current_observation.temp_f;
    this.currentDate = data.current_observation.observation_time_rfc822;
    this.currentLocation = data.current_observation.display_location.full;
    this.currentWeatherShortSummary = data.current_observation.weather;
    this.highTemperature = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    this.lowTemperature = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    this.currentWeatherLongSummary = data.forecast.txt_forecast.forecastday[0].fcttext_metric;
    this.sevenHourForecastHours = data.hourly_forecast.map(hour => hour.FCTTIME.civil);
    this.sevenHourForecastHours.splice(7);
    this.sevenHourForecastTemps = data.hourly_forecast.map(day =>  day.temp);
    this.sevenHourForecastTemps.splice(7);
    this.sevenHourForecastConditions = data.hourly_forecast.map(day => day.condition)
    this.sevenHourForecastConditions.splice(7);
    this.tenDayForecastDayNames = data.forecast.simpleforecast.forecastday.map(day => day.date.weekday_short);
    this.tenDayForecastIcons = data.forecast.simpleforecast.forecastday.map(day => day.conditions);
    this.tenDayForecastHighTemps = data.forecast.simpleforecast.forecastday.map(day => day.high.fahrenheit);
    this.tenDayForecastLowTemps = data.forecast.simpleforecast.forecastday.map(day => day.low.fahrenheit);
  }
}

export default DataCleaner


