import React, { Component } from 'react';
import './styles/Welcome.css';
import PrefixTrie from './Prefixtrie'
import  cities from './largest1000cities'
import Suggestions from './Suggestions'


class Welcome extends Component {
  constructor (props) {
    super(props);
  
    this.state = {
      userInput: '',
      prefixTrie: new PrefixTrie()
    }

    this.state.prefixTrie.populate(cities)
    this.state.prefixTrie.suggest(this.state.userInput)
    this.captureInfo = this.captureInfo.bind(this)
    
  }

  captureInfo (event) {
    this.setState({
      userInput: event.target.value,
    })
  }

  render () {
    if(this.props.error) {
      return (
        <div className = "Welcome">
          <div className = 'blackBackground'>
            <h2> ERRRRRORRRRRRRRRrrrr </h2>
            <h5> Current Location </h5>
            <div className = 'container'>
              <input className = 'locationInput' 
                type='text' 
                onKeyUp={(event) => {
                  if(event.key === 'Enter') {
                    this.props.setLocationState(this.state.userInput)
                  }
                  this.captureInfo(event)}
                }   
              />
              <button className = 'searchButton'
                onClick = { () => {
                  this.props.setLocationState(this.state.userInput)
                }
                }
              >Search</button>
            </div>
          </div>  
        </div>
      )

    }
    return (
      <div className = "Welcome">
        <div className = 'blackBackground'>
          <div className = 'logo'/>
          <h5> Search your Location </h5>
          <div className = 'container'>
            <input className = 'locationInput' 
              placeholder ='Enter your City and State' 
              type='text' 
              list='cities'
              onKeyUp={(event) => {
                if(event.key === 'Enter') {
                  this.props.setLocationState(this.state.userInput)
                }
                this.captureInfo(event)}
              }
            />
            {Suggestions(this.state.prefixTrie.suggestionArray)}
            <button className = 'searchButton' 
              onClick = { () => {
                this.props.setLocationState(this.state.userInput)
              }
              }
            >Search </button>
          </div>
        </div>  
      </div>
    )
  }
}

export default Welcome;