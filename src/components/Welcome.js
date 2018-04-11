import React, { Component } from 'react';
import './styles/Welcome.css'

class Welcome extends Component {
  constructor(props) {
    super();
  
    this.state = {
      city: '',
      state: '',
      userInput: ''
    }
  }

  captureInfo(event) {
    this.setState({
      userInput: event.target.value,
    })
  }

  updateLocation() {
    let locationArray = this.state.userInput.split(' ');
    let temporaryCity = locationArray[0].split('')
    temporaryCity.pop();
    this.setState({
      city: temporaryCity.join(''),
      state: locationArray[1]
    })
  }

  render() {
    return (
      <div className = "Welcome">
        <input type='text' onChange={(event) => this.captureInfo(event)}></input>
        <button onClick={() => {
          this.updateLocation()
          this.props.updateLocation(this.state)
          this.props.changeWelcomeState()
          }}></button>
      </div>

    )
  }
}

export default Welcome;