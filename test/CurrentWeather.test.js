import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../src/components/CurrentWeather';
import CurrentWeatherCard from '../src/components/CurrentWeatherCard';


describe('CurrentWeather', () => {
  let CurrentWeatherComponent;

  beforeEach(() => {
    CurrentWeatherComponent = shallow(<CurrentWeather />);
  });

  it('should exist', () => {
    expect(CurrentWeatherComponent).toBeDefined();
  });

  it('should have a sevenHourClicked state that defaults to false', () => {
    const expectation = false
    expect(CurrentWeatherComponent.state('sevenHourClicked')).toEqual(expectation)
  });

  it('should have a tenDayClicked state that defaults to false', () => {
    const expectation = false
    expect(CurrentWeatherComponent.state('tenDayClicked')).toEqual(expectation)
  });

  it('should toggle the TenDay state on click ', () => {
    const expectation = true
    const currentState = false
    CurrentWeatherComponent.setState({tenDayClicked: currentState})
    CurrentWeatherComponent.instance().showSevenHour()
    expect(CurrentWeatherComponent.state('sevenHourClicked')).toEqual(expectation)
  });

  it('should toggle the sevenHourClicked state on click ', () => {
    const expectation = true;
    const currentState = false;

    CurrentWeatherComponent.setState({sevenHourClicked: currentState})
    CurrentWeatherComponent.instance().showTen();
    expect(CurrentWeatherComponent.state('tenDayClicked')).toEqual(expectation)
  });

  it('should render the currentWeatherCard component', () => {
    expect(CurrentWeatherComponent.find(CurrentWeatherCard));
  })

})