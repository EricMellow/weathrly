import Background from './Background';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import './styles/App.css'
import React, { Component } from 'react';
import DataCleaner from './DataCleaner';
import GetData from './GetData';
import Welcome from './Welcome';


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
  } 

  changeWelcomeState() {
    this.setState({
      welcome: false,
    })
  }

  makeAPICall(selectedCity, selectedState) {
    this.setState({
      locationWeather: GetData(selectedCity, selectedState)
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
        <Search location = {this.state.location}/>
        <CurrentWeather />
      </div>
    );
   }
  }
}

export default App;

