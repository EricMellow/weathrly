import React, { Component } from 'react';
import './styles/Card.css'

const Card = () => {
  return(
    <div className = 'Card'> 
     <h3>Mon</h3>
     <img src="https://www.lamotteschool.com/img/weather-icon.png"></img>
     <div className = 'high-low'>
      <h4>42°</h4>
      <h4>42°</h4>
     </div>
    <div className ='background'> </div>
    </div>
  )
}

export default Card;