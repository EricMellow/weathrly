import React from 'react'
import { shallow } from 'enzyme';
import sevenHourForecast from '../src/components/sevenHourForecast';
import Card from '../src/components/Card';

describe('SevenHourForecastComponent', () => {

  it('should exist', () => {
    const SevenHourForecastComponent = shallow(<sevenHourForecast />);
    expect(SevenHourForecastComponent).toBeDefined();
  });
  
  it('should render as expected when given props', () => {
    const props = { weather: []};
    const SevenHourForecastComponent= shallow(<sevenHourForecast  {...props} />);
    expect(SevenHourForecastComponent.find(props))
  });
  
  it('should render a card component', () => {
    const SevenHourForecastComponent= shallow(<sevenHourForecast />);
    expect(SevenHourForecastComponent.find(Card))
  });

  it('should render the sevenHourDiv', () => {
    const props = { weather: []};
    const SevenHourForecastComponent= shallow(<sevenHourForecast  {...props} />);
    const sevenDayCards = []
    expect(SevenHourForecastComponent.find('.sevenDayCards'))
  });
})