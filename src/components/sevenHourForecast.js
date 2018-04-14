import React, { Component } from 'react';
import Card from './Card';
import './styles/sevenHourForecast.css';

const SevenHourForecast = (weather) => {
  const sevenDayCards = weather.map((hour, index) => {
    return (
      <Card
        key={index}
        hour={hour.hour}
        conditions={hour.conditions}
        temp={hour.temp}
      />
    )
  })

  return (
    <div className='sevenHourDiv'>
      {sevenDayCards}
    </div>
  )
}

export default SevenHourForecast;