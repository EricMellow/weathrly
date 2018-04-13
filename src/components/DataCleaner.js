import React, {Component} from 'react';
// import data from './Data'

const DataCleaner = (data) => {
  console.log(data)
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
    sevenHourWeather: {
      sevenHourForecastHours: data.hourly_forecast.map(hour => hour.FCTTIME.civil).splice(7),
      sevenHourForecastTemps: data.hourly_forecast.map(day =>  day.temp).splice(7),
      sevenHourForecastConditions: data.hourly_forecast.map(day => day.condition).splice(7)
    },
    tenDayWeather: {
      tenDayForecastDayNames: data.forecast.simpleforecast.forecastday.map(day => day.date.weekday_short),
      tenDayForecastIcons: data.forecast.simpleforecast.forecastday.map(day => day.conditions),
      tenDayForecastHighTemps: data.forecast.simpleforecast.forecastday.map(day => day.high.fahrenheit),
      tenDayForecastLowTemps: data.forecast.simpleforecast.forecastday.map(day => day.low.fahrenheit)
    }
  }
}

export default DataCleaner;



