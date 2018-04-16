import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/components/Card';


describe('Card', () => {
  
  it('should exist', () => {
    const cardComponent = shallow(<Card />);
    
    expect(cardComponent).toBeDefined();
  });
  
  it('should render as expected when given props', () => {
    const props = { key: 1, hour: '3:00 PM', icon: "http://icons-ak.wxug.com/i/c/k/partlycloudy.gif", temp: 47};
    const card = shallow(<Card  {...props} />);
    expect(card.find('.high').text()).toEqual("47°");
    expect(card.find('.hour').text()).toEqual("3:00 PM");
  });
  
  it('should render a different card when given different props', () => {
    const props = { key: 1, day: 'FRI', icon: "http://icons-ak.wxug.com/i/c/k/partlycloudy.gif", highTemp: 67, lowTemp: 45 };
    const card = shallow(<Card  {...props} />);
    expect(card.find('.low').text()).toEqual("45°");
    expect(card.find('.day').text()).toEqual("FRI");
  });

})