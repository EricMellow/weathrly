import React from 'react';
import APIKey from './APIKey.js'
import DataCleaner from './DataCleaner'


const GetData = (selectedCity, selectedState) => {
console.log(selectedCity, selectedState)
  fetch(`http://api.wunderground.com/api/${APIKey}/conditions/hourly/forecast10day/q/${selectedState}/${selectedCity}.json`).then((response) => {
    response.json().then(weatherData => DataCleaner(weatherData))
  })
}

export default GetData;