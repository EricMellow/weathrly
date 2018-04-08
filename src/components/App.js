import Background from './Background';
import CurrentWeather from './CurrentWeather';
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
      </div>
  )
}
}

export default App;

