import React, { Component } from 'react';
import './styles/Card.css'

const Card = () => {
  return(
    <div className = 'Card'> 
      <h3>Mon</h3>
      <img src="src/assets/partly-cloudy.png"></img>
      <div className = 'high-low'>
        <h4 className = 'high'>42°</h4>
        <h4 className ='low'>12°</h4>
      </div>
    </div>
  )
}

export default Card;