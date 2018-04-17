import React, { Component } from 'react';
import './styles/Search.css';
import dateCleaner from './dateCleaner';
import PrefixTrie from './Prefixtrie';
import cities from './largest1000cities';
import suggestions from './suggestions';

class Search extends Component {
  constructor (props) {
    super();
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
      <div className = 'searchBar'> 
        <div className = 'searchIcon'/>
        <input className = 'searchInput' 
          type='text' 
          list='cities'
          placeholder = {`${this.props.location}`} 
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              this.props.setLocationState(this.state.userInput);
            }    
            this.captureInfo(event);
          }}
        />
        {suggestions(this.state.prefixTrie.suggestionArray)}
        <h3> 
          {dateCleaner(this.props.date)}
        </h3>
      </div>
    );
  }
}

export default Search;