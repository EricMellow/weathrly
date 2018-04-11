import React, { Component } from 'react';
import './styles/Welcome.css'

class Welcome extends Component {
  constructor(props) {
    super();
  
    this.state = {
      city: '',
      state: ''
    }
  }

  captureInfo(event) {
    let infoArray = event.target.value
    this.setState({

    })
  }

  render() {
    return (
      <div className = "Welcome">
        <input type='text' onChange={(event) => this.captureInfo(event)}></input>
        <button onClick={() => this.props.changeWelcomeState()}></button>
      </div>

    )
  }
}

export default Welcome;