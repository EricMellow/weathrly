import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/components/App';


describe('App', () => {
  let appComponent;

  beforeEach(() => {
    appComponent = shallow(<App />);
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

  it('should update the location state when running the updateLocation function', () => {
    const expectation = 'Bogota'
    const currentState = ''
    CurrentWeatherComponent.setState({tenDayClicked: currentState})
    CurrentWeatherComponent.instance().showSevenHour()
    expect(CurrentWeatherComponent.state('sevenHourClicked')).toEqual(expectation)
  });

})