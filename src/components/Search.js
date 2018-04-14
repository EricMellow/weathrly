import React, { Component } from 'react';
import './styles/Search.css'
import DateCleaner from './DateCleaner'

class Search extends Component {
  constructor (props) {
    super()
    this.state = {
      userInput: ''
    }

    // this.updateLocation = this.updateLocation.bind(this)
    this.captureInfo = this.captureInfo.bind(this)
  }

  captureInfo (event) {
    this.setState({
      userInput: event.target.value,
    })
  }

  // updateLocation () {
  //   let locationInput = this.state.userInput
   
  //   return locationArray
  // }

  render () {
    return (
      <div className = 'searchBar'> 
        <input className = 'searchInput' 
          type='text' 
          placeholder = {`${this.props.location}`} 
          onKeyUp={(event) => {
            if(event.key === 'Enter') {
              this.props.setLocationState(this.state.userInput)
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