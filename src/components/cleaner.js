

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