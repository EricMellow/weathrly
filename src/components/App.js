import Background from './Background';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import './styles/App.css'
import React, { Component } from 'react';
import DataCleaner from './DataCleaner';
import GetData from './GetData';
import Welcome from './Welcome';
import getPosition from './LocationAPI.js';

const weatherData = new DataCleaner;
getPosition()

GetData()
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      location: {
        city: '',
        state: ''
      },
      welcome: true,
    };

    this.changeWelcomeState = this.changeWelcomeState.bind(this);
    this.handleUpdateLocation = this.handleUpdateLocation.bind(this)
  }
 
  handleUpdateLocation (selectedInfo) {
    this.setState({
      location: {
        city: selectedInfo.city,
        state: selectedInfo.state
      }
    })
  } 

  changeWelcomeState() {
    this.setState({
      welcome: false,
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
        handleUpdateLocation = {this.handleUpdateLocation}
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

