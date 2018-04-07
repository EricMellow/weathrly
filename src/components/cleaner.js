

//  Current Temperature
const currentTemp = data.current_observation.temp_f

// Today's date 
const currentdate = data.current_observation.observation_time_rfc822

// Hourly forecast
const tempArr = data.hourly_forecast.map(day =>  day.temp)
tempArr.splice(7)

// Hourly weather condition
const tempDay = data.hourly_forecast.map(day => 
  descrip = `${day.FCTTIME.hour} ${day.FCTTIME.pretty} ${day.icon}`)
tempDay.splice(7)

//  Daily forecast high
const high = data.forecast.simpleforecast.forecastday.map(day => day.high.fahrenheit)

// Daily forecast low
const low = data.forecast.simpleforecast.forecastday.map(day => day.low.fahrenheit)

//Get location
const currentLocation = data.current_observation.display_location.full;

//Get current short weather description
const currentWeatherShortSummary = data.current_observation.weather;

//Get current high temperature
const highTemperature = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;

//Get current low temperature
const lowTemperature = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;

//Get today's long weather description
const currentWeatherLongSummary = data.forecast.txt_forecast.forecastday[0].fcttext_metric;

//Get 7 hour forecast times of day
//RETURNS AN ARRAY
const sevenHourForecastHours = data.hourly_forecast.map(hour => hour.FCTTIME.civil);
sevenHourForecastHours.splice(7)

//Get 10 day forcast days of the week
//RETURNS AN ARRAY
const tenDayForecastDayNames = data.forecast.simpleforecast.forecastday.map(day => day.date.weekday_short);

//Get 10 day forecast short weather descriptions for icons
//RETURNS AN ARRAY
const tenDayForecastIcons = data.forecast.simpleforecast.forecastday.map(day => day.conditions);