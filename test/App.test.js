import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/components/App';
import Welcome from '../src/components/Welcome';
import Search from '../src/components/Search';
import CurrentWeather from '../src/components/CurrentWeather';
import Background from '../src/components/Background';

describe('App', () => {
  let appComponent;
  
  beforeEach(() => {
    appComponent = shallow(<App />);
    appComponent.state.locationWeather = {
      currentWeather: {
          currentTemp: 72,
          currentDate: 'Wed, 27 Jun 2012 17:27:13 -0700',
          currentLocation: 'Denver, CO',
          highTemperature: 75,
          lowTemperature: 47,
          icon: 'Clear',
          currentWeatherLongSummary: 'It is pretty rad out there today'
        },
      sevenHourWeather: [{
            hour: '1:00 PM',
            icon: 'URL',
            temp: 72
      }],
    
      tenDayWeather: [{
            day: 'FRI',
            icon: 'URL',
            highTemp: 73,
            lowTemp: 48
          }]
    };
    
    appComponent.makeAPICall = jest.fn()
  });

  it('should exist', () => {
    expect(appComponent).toBeDefined();
  });

  it('should have a location state that defaults to empty string', () => {
    let expectation = ''
    expect(appComponent.state('location')).toEqual(expectation)
  });

  it('should have a welcome state that defaults to true', () => {
    let expectation = true
    expect(appComponent.state('welcome')).toEqual(expectation)
  });

  it('should have a location weather state that defaults to empty object', () => {
    let expectation = {}
    expect(appComponent.state('locationWeather')).toEqual(expectation)
  });

  it('should have a error state that defaults to false', () => {
    let expectation = false
    expect(appComponent.state('error')).toEqual(expectation)
  });

  // it('should update the location state when running the updateLocation function', () => {
  //   appComponent.makeAPICall = jest.fn()
  //   const expectation = 'Bogota'
  //   const currentState = ''
  //   appComponent.instance().setLocationState('Bogota')
  //   expect(appComponent.state('location')).toEqual(expectation)
  // });

   it('should update the welcome and error state when calling the changeWelcome state', () => {
    const expectation = false
    const currentState = true
    appComponent.instance().changeWelcomeState()
    expect(appComponent.state('welcome')).toEqual(expectation)
  });

  it('should render the welcome component', () => {
    expect(appComponent.find(Welcome));
  });

  it('should render the background component', () => {
    expect(appComponent.find(Background));
  });

  it('should render the search component', () => {
    expect(appComponent.find(Search));
  });

  it('should render the current weather component', () => {
    expect(appComponent.find(CurrentWeather));
  });


})