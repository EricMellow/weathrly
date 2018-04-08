import React, { Component } from 'react';
import './styles/Current-weather.css'

const CurrentWeather = () => {
  return(
    <div className = 'CurrentWeather'> 
      <h1 className = 'current-temp'>23°</h1>
      <h2> Partly Cloudy </h2>
      <div className = 'high-and-low'> 
        <h3>42°</h3>
        <h3 className = 'low-temp'>13°</h3>
      </div>
      <article>Today's weather is going to be windy af, but it will also be sunny and warm, so that's kinda cool, right?!</article>
      <div className = 'view-buttons'> 
        <button> 7 Hour forecast </button>
        <button> 10 days</button>
      </div>
    </div>
  )
}

export default CurrentWeather;