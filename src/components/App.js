import Background from './Background';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import './styles/App.css'
import React, { Component } from 'react';
import DataCleaner from './DataCleaner';
import Welcome from './Welcome';
import APIKey from './APIKey.js'


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      location: {
        selectedCity: '',
        selectedState: ''
      },
      welcome: true,
      locationWeather: {},
    };

    this.changeWelcomeState = this.changeWelcomeState.bind(this);
    this.setLocationState = this.setLocationState.bind(this)
  }
 
  setLocationState(selectedCity, selectedState) {
    this.setState({
      location: {
        selectedCity: selectedCity,
        selectedState: selectedState
      }
    })
    this.makeAPICall(selectedCity, selectedState);
    setTimeout(this.changeWelcomeState, 1000)
  } 

  changeWelcomeState() {
    this.setState({
      welcome: false,
    })
  }

  makeAPICall(selectedCity, selectedState) {
    fetch(`http://api.wunderground.com/api/${APIKey}/conditions/hourly/forecast10day/q/${selectedState}/${selectedCity}.json`)
      .then((response) => {response.json()
        .then((weatherData) => {
          this.setState({
            locationWeather: DataCleaner(weatherData)
          }) 
        })
      })
  }
  

  render() {
    if (this.state.welcome) {
      return (<Welcome 
        changeWelcomeState = {this.changeWelcomeState}
        setLocationState = {this.setLocationState}
      />)
    } else {
      return (
        <div className ='App'>
          <Background />
          <Search location = {this.state.location}
            changeWelcomeState = {this.changeWelcomeState}
            setLocationState = {this.setLocationState}
            date = {this.state.locationWeather.currentWeather.currentDate}
          />
          <CurrentWeather locationWeather = {this.state.locationWeather} />
        </div>
      );
    }
  }
}

export default App;

