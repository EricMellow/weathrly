import Background from './Background';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import './styles/App.css'
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: 'Denver, CO'
    };
  }
 
  render() {
    return (
      <div className ='App'>
        <Background />
        <Search location = {this.state.location}/>
        <CurrentWeather />
      </div>
    );
  }
}

export default App;

