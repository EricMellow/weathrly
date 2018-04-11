import React from 'react';

const GetData = (city, state) => {
  fetch("http://api.wunderground.com/api/88ef1e92ce237795/conditions/hourly/forecast10day/q/CA/San_Francisco.json").then((response) => {
    response.json().then(weatherData => console.log(weatherData))
  })
}

export default GetData;