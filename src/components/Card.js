import React, { Component } from 'react';
import './styles/Card.css'

class Card extends Component {
  constructor(props) {
    super();

  }

  render() {
    if (this.props.day) {
      return(
        <div className = 'Card'> 
          <h3>{this.props.day}</h3>
          <img src="src/assets/partly-cloudy.png"></img>
          <div className = 'high-low'>
            <h4 className = 'high'>{this.props.highTemp}°</h4>
            <h4 className ='low'>{this.props.lowTemp}°</h4>
          </div>
        </div>
      )
    } else {
      return (
        <div className='Card'>
          <h3>{this.props.hour}</h3>
          <img src="src/assets/partly-cloudy.png"></img>
          <div className='high-low'>
            <h4 className='high'>{this.props.temp}°</h4>
          </div>
        </div>
      )
    }
  }
}

export default Card;