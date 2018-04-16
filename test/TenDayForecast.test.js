import React from 'react'
import { shallow } from 'enzyme';
import TenDayForecast from '../src/components/TenDayForecast';
import Card from '../src/components/Card';

describe('TenDayForecastComponent', () => {

  it('should exist', () => {
    const TenDayForecastComponent = shallow(<TenDayForecast />);
    expect(TenDayForecast).toBeDefined();
  });
  
  // it('should render as expected when given props', () => {
  //   const props = { weather: []};
  //   const TenDayForecastComponent = shallow(<TenDayForecast  {...props} />);
  //   expect(TenDayForecast.find(props))
  // });
  
  // it('should render a card component', () => {
  //   const TenDayForecastComponent = shallow(<TenDayForecast {...props}/>);
  //   expect(TenDayForecast.find(Card))
  // });

  // it('should render the sevenHourDiv', () => {
  //   const props = { weather: []};
  //   const TenDayForecastComponent = shallow(<TenDayForecast  {...props} />);
  //   const tenDay = []
  //   expect(TenDayForecast.find('.tenDay'))
  // });
})