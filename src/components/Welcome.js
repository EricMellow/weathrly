import React, { Component } from 'react';
import './styles/Welcome.css'

class Welcome extends Component {
  constructor (props) {
    super(props);
  
    this.state = {
      city: '',
      state: '',
      userInput: ''
    }
    this.updateLocation = this.updateLocation.bind(this)
    this.captureInfo = this.captureInfo.bind(this)
    
  }

  captureInfo (event) {
    this.setState({
      userInput: event.target.value,
    })
  }

  updateLocation () {
    let locationInput = this.state.userInput
    let locationArray = locationInput.split(', ');
    this.setState({
      city: locationArray[0],
      state: locationArray[1]
    })
  }

  render () {
    const userInput = this.state.userInput
    return (
      <div className = "Welcome">
        <input type='text' onChange={(event) => this.captureInfo(event)}/>
        <button
          onClick = { (event) => this.updateLocation() }

        />  
      </div>

    )
  }
}

export default Welcome;