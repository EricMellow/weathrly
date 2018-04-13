import React, { Component } from 'react';
import './styles/Welcome.css'

class Welcome extends Component {
  constructor (props) {
    super(props);
  
    this.state = {
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
    return locationArray
  }

  render () {
    return (
      <div className = "Welcome">
        <div className = 'blackBackground'>
          <h5> Current Location </h5>
          <div className = 'container'>
            <input className = 'locationInput' type='text' onChange={(event) => this.captureInfo(event)}/>
            <button className = 'searchButton'
              onClick = { () => {
                this.props.setLocationState(this.updateLocation()[0], this.updateLocation()[1])
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