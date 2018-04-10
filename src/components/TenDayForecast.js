import React, { Component } from 'react';
import Card from './Card';
import './styles/TenDayForecast.css';

class TenDayForecast extends Component {
   constructor() {
    super()
   }

render(){
    return(
        <div className = 'tenDay'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
  } 
}

export default TenDayForecast;

