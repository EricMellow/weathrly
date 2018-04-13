import React, { Component } from 'react';
import './styles/Search.css'
import DateCleaner from './DateCleaner'

class Search extends Component {
  constructor (props) {
    super()
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
      <div className = 'searchBar'> 
        <input className = 'searchInput' 
          type='text' 
          placeholder = {this.state.locationInput} 
          onKeyUp={(event) => {
            if(event.key === 'Enter') {
              this.props.setLocationState(this.updateLocation()[0], this.updateLocation()[1])
            }    
            this.captureInfo(event) 
          }}
        />
        <h3> 
          {DateCleaner(this.props.date)}
        </h3>
      </div>
    )
  }
}

export default Search;