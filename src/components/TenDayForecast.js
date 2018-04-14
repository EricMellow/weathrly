import React, { Component } from 'react';
import Card from './Card';
import './styles/TenDayForecast.css';

const TenDayForecast = (weather) => {
    console.log(weather)
    const tenDayCards = weather.map((day, index) => {
        return (
            <Card 
                key = {index}
                day = {day.day}
                icon = {day.icon}
                highTemp = {day.highTemp}
                lowTemp = {day.lowTemp}
            />
        )
    })

    return(
        <div className='tenDay'>
            {tenDayCards}
        </div>
    )
  }

export default TenDayForecast;

