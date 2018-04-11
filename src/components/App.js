import Background from './Background';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import './styles/App.css'
import React, { Component } from 'react';
import DataCleaner from './DataCleaner';
import GetData from './GetData';
import Welcome from './Welcome';

const weatherData = new DataCleaner;



class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      state: '',
      welcome: true,
     
    };
    this.changeWelcomeState = this.changeWelcomeState.bind(this);
    this.updateLocation = this.updateLocation.bind(this)
  }
 
  updateLocation(selectedInfo) {
    console.log(selectedInfo)
    this.setState({
      city: selectedInfo.city,
      state: selectedInfo.state
    })
  } 

  changeWelcomeState() {
    this.setState({
      welcome: false
    })
    this.makeAPICall();
  }

  makeAPICall() {
    GetData()
  }

  render() {
    if (this.state.welcome) {
      return (<Welcome 
        changeWelcomeState = {this.changeWelcomeState}
        updateLocation = {this.updateLocation}
        />)
    } else {
    return (
      <div className ='App'>
        <Background />
        <Search location = {this.state.location}/>
        <CurrentWeather />
      </div>
    );
   }
  }
}

export default App;

