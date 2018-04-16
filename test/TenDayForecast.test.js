import React from 'react'
import { shallow } from 'enzyme';
import TenDayForecast from '../src/components/TenDayForecast';
import Card from '../src/components/Card';

describe('TenDayForecastComponent', () => {

  beforeEach(() => {
    const props = [{
      day : 'Mon',
      icon : 'url',
      highTemp : 70,
      lowTemp : 7
    }]
    const TenDayForecastComponent = shallow(<TenDayForecast  weather = {props}/>);
  });


  it('should exist', () => {
    expect(TenDayForecast).toBeDefined();
  });
  
  it('should render as expected when given props', () => {
    const props = [{
      day : 'Mon',
      icon : 'url',
      highTemp : 70,
      lowTemp : 7
    }]
    const TenDayForecastComponent = shallow(<TenDayForecast  weather = {props}/>);
    expect(TenDayForecastComponent.find({props}))
  });
  
  it('should render a card component', () => {
    const props = [{
      day : 'Tues',
      icon : 'url()',
      highTemp : 80,
      lowTemp : 10
    }]
    const TenDayForecastComponent = shallow(<TenDayForecast  weather = {props}/>);
    expect(TenDayForecastComponent.find(Card))
  });

  it('should render the sevenHourDiv', () => {
    const props = [{
      day : 'Wed',
      icon : 'url()',
      highTemp : 10,
      lowTemp : 2
    }]
    const TenDayForecastComponent = shallow(<TenDayForecast  weather = {props}/>);
    const tenDay = []
    expect(TenDayForecastComponent.find('.tenDay'))
  });
})