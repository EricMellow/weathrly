import Background from './Background';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
 
render(){
  return (
      <div className ='App'>
        <Background />
        <CurrentWeather />
        <Card />
      </div>
  )
}
}

export default App;

