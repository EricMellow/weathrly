import React, { Component } from 'react';
import './styles/Search.css'

class Search extends Component {
  constructor (props) {
    super()
    this.state = {
      locationInput: props.location
    }
  }

  render () {
    return (
      <div className = 'searchBar'> 
        <input 
          type = 'text' 
          placeholder = {this.state.locationInput}   
        />
        <h3> 
          Tuesday, April 10th
        </h3>
      </div>
    )
  }
}

export default Search;