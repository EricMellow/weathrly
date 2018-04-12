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
  constructor (props) {
    super(props);
    this.state = {
      city: '',
      state: '',
      welcome: true,
     
    };
    this.changeWelcomeState = this.changeWelcomeState.bind(this);
    this.handleUpdateLocation = this.handleUpdateLocation.bind(this)
  }
 
  handleUpdateLocation (selectedInfo) {
    console.log('before', this.state)
    let locationArray = selectedInfo.split(' ');
    let temporaryCity = locationArray[0].split('');
    console.log(temporaryCity)
    temporaryCity.pop();
    this.setState({
      city: 'HI',
      state: locationArray[1]
    })
    console.log('after', this.state)
  } 

  changeWelcomeState() {
    this.setState({
      welcome: false,
      city: 'HI'
    })
    console.log(this.state)
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

