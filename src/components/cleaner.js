//  Current Temperature
const currentTemp = data.current_observation.temp_f;

// Today's date 
const currentDate = data.current_observation.observation_time_rfc822;

// Get location
const currentLocation = data.current_observation.display_location.full;

// Get current short weather description
const currentWeatherShortSummary = data.current_observation.weather;

// Get current high temperature
const highTemperature = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;

// Get current low temperature
const lowTemperature = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;

// Get today's long weather description
const currentWeatherLongSummary = data.forecast.txt_forecast.forecastday[0].fcttext_metric;

// Get 7 hour forecast times of day
// RETURNS AN ARRAY
const sevenHourForecastHours = data.hourly_forecast.map(hour => hour.FCTTIME.civil);
sevenHourForecastHours.splice(7);

// 7 hour forecast projected temperature
//RETURNS AN ARRAY
const sevenHourForecastTemps = data.hourly_forecast.map(day =>  day.temp);
sevenHourForecastTemps.splice(7);

// 7 hour projected conditions for icons
//RETURNS AN ARRAY
const sevenHourForecastConditions = data.hourly_forecast.map(day => day.condition)
sevenHourForecastConditions.splice(7);

// Get 10 day forcast days of the week
// RETURNS AN ARRAY
const tenDayForecastDayNames = data.forecast.simpleforecast.forecastday.map(day => day.date.weekday_short);

// Get 10 day forecast short weather descriptions for icons
// RETURNS AN ARRAY
const tenDayForecastIcons = data.forecast.simpleforecast.forecastday.map(day => day.conditions);

// 10 day forecast high
// RETURNS AN ARRAY
const tenDayForecastHighTemps = data.forecast.simpleforecast.forecastday.map(day => day.high.fahrenheit);

// 10 day forecast low
//RETURNS AN ARRAY
const tenDayForecastLowTemps = data.forecast.simpleforecast.forecastday.map(day => day.low.fahrenheit);