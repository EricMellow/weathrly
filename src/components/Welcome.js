import React, { Component } from 'react';
import './styles/Welcome.css';
import PrefixTrie from './Prefixtrie';
import  cities from './largest1000cities';
import Suggestions from './Suggestions';


class Welcome extends Component {
  constructor (props) {
    super(props);
  
    this.state = {
      userInput: '',
      prefixTrie: new PrefixTrie()
    };
    this.state.prefixTrie.populate(cities);
    this.state.prefixTrie.suggest(this.state.userInput);
    this.captureInfo = this.captureInfo.bind(this);
  }

  captureInfo (event) {
    this.setState({
      userInput: event.target.value
    });
  }

  render () {
    return (
      <div className = "Welcome">
        <div className = 'blackBackground'>
          <h5> Weathrly </h5>
          <div className = 'container'>
            <input className = 'locationInput' 
              placeholder ='Enter City, State or Zip code' 
              type='text' 
              list='cities'
              onKeyUp={(event) => {
                if (event.key === 'Enter') {
                  this.props.setLocationState(this.state.userInput);
                }
                this.captureInfo(event);
              }
              }
            />
            {Suggestions(this.state.prefixTrie.suggestionArray)}
            <button className = 'searchButton' 
              onClick = { () => {
                this.props.setLocationState(this.state.userInput);
              }
              }
            >Search </button>
          </div>
        </div>  
      </div>
    );
  }
}

export default Welcome;