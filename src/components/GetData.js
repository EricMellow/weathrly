import React from 'react';
import APIKey from './APIKey.js'

const GetData = (city, state) => {
  fetch(`http://api.wunderground.com/api/${APIKey}/conditions/hourly/forecast10day/q/${state}/${city}.json`).then((response) => {
    response.json().then(weatherData => console.log(weatherData))
  })
}

export default GetData;