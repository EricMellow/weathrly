import React, {Component} from 'react';

const DataCleaner = (data) => {
  let hourlyArray = data.hourly_forecast.map(hour => {
    return {
      hour: hour.FCTTIME.civil,
      icon: hour.icon,
      temp: hour.temp.english
    };
  }).slice(0, 7);

  return {
    currentWeather: {
      currentTemp: data.current_observation.temp_f,
      currentDate: data.current_observation.observation_time_rfc822,
      currentLocation: data.current_observation.display_location.full,
      highTemperature: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      lowTemperature: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      icon: data.current_observation.icon,
      currentWeatherLongSummary: data.forecast.txt_forecast.forecastday[0].fcttext
    },
    sevenHourWeather: hourlyArray,
    tenDayWeather: data.forecast.simpleforecast.forecastday.map(day => {
      return {
        day: day.date.weekday_short,
        icon: day.icon,
        highTemp: day.high.fahrenheit,
        lowTemp: day.low.fahrenheit
      };
    })
  };
};

export default DataCleaner;



