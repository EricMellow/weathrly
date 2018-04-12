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
    // const userInput = this.state
    return (
      <div className = 'Welcome'>
        <div className = 'blackBackground'>
          <h5> Current Location </h5>
          <div className = 'container'>
            <input className = 'locationInput' placeholder = 'Find your City' type='text' onChange={(event) => this.captureInfo(event)}/>
            <button className = 'searchButton' title = 'Search'
              onClick = { (event) => {
                this.updateLocation()
                this.props.handleUpdateLocation(this.state)
                this.props.changeWelcomeState()
              }
              }
            /> 
          </div>
        </div>
      </div>

    )
  }
}

export default Welcome;