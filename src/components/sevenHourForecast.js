import React, { Component } from 'react';
import Card from './Card';
import './styles/sevenHourForecast.css';

class SevenHourForecast extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className ='sevenHourDiv'> 
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

export default SevenHourForecast;