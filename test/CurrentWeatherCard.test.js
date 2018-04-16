import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeatherCard from '../src/components/CurrentWeatherCard';
import TenDayForecast from '../src/components/TenDayForecast';
import SevenHourForecast from '../src/components/SevenHourForecast';


describe('CurrentWeatherCard', () => {
  let CurrentWeatherCardComponent;
  const weatherProps = {
      tenDayForecast: jest.fn(),
      tenDayClicked: true,
      currentWeather: {
        currentTemp: 64,
        currentDate: "Wed, 27 Jun 2012 17:27:13 -0700",
        currentLocation: 'Lincoln, NE',
        highTemperature: 72,
        lowTemperature: 53,
        icon: "http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
        currentWeatherLongSummary: 'What a nice fucking day'
      }
};

  beforeEach(() => {
    CurrentWeatherCardComponent = shallow(<CurrentWeatherCard locationWeather = { weatherProps } />);
  });

  it('should exist', () => {
    expect(CurrentWeatherCardComponent).toBeDefined();
  });

  it('should render a current weather card with output from the props it was passed', () => {
    expect(CurrentWeatherCardComponent.find('.current-temp').text()).toBe('64°');
  });

  it('should render a current weather card with a high temperature from the props it was passed', () => {
    expect(CurrentWeatherCardComponent.find('.high-temp').text()).toBe('72°');
  });

  it('should render a current weather card with a low temperature from the props it was passed', () => {
    expect(CurrentWeatherCardComponent.find('.low-temp').text()).toBe('53°');
  });

  it('should render a current weather card with a long summary from the props it was passed', () => {
    expect(CurrentWeatherCardComponent.find('.longSummary').text()).toBe('What a nice fucking day');
  });

  // it('renders TenDayForecast when tenDayClicked is true', () => {
  //   console.log(CurrentWeatherCardComponent.debug())
  //   const spy = jest.spyOn(CurrentWeatherCardComponent, 'tenDayForecast')
  //   CurrentWeatherCardComponent.instance().find('.tenDayButton').simulate('click')
  //   expect(spy).toHaveBeenCalled();
  // })

});