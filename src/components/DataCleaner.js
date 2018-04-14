import React, {Component} from 'react';
// import data from './Data'

const DataCleaner = (data) => {
  let hourlyArray = data.hourly_forecast.map(hour => {
    return {
      hour: hour.FCTTIME.civil,
      conditions: hour.wx,
      temp: hour.temp.english
    }
  }).slice(0, 7)

  return {
    currentWeather: {
      currentTemp: data.current_observation.temp_f,
      currentDate: data.current_observation.observation_time_rfc822,
      currentLocation: data.current_observation.display_location.full,
      highTemperature: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      lowTemperature: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      currentWeatherShortSummary: data.current_observation.weather,
      currentWeatherLongSummary: data.forecast.txt_forecast.forecastday[0].fcttext
    },
    sevenHourWeather: hourlyArray,
    tenDayWeather: data.forecast.simpleforecast.forecastday.map(day => {
      return {
        day: day.date.weekday_short,
        conditions: day.conditions,
        highTemp: day.high.fahrenheit,
        lowTemp: day.low.fahrenheit
      }
    })
  }
}

export default DataCleaner;



