import React from 'react';
import { shallow } from 'enzyme';
import Search from '../src/components/Search';



describe('Search', () => {
  let SearchComponent;


  beforeEach(() => {
    SearchComponent = shallow(<Search 
      location='Denver, CO' 
      changeWelcomeState={jest.fn()} 
      setLocationState={jest.fn()} 
      date= 'Wed, 27 Jun 2012 17:27:13 -0700' />);
  });

  it('should exist', () => {
    expect(SearchComponent).toBeDefined();

  });

  it('should have a userInput state that defaults to false', () => {
    const expectation = '';

    expect(SearchComponent.state('userInput')).toEqual(expectation);
  });

  it('should be able to capture user input', () => {
    expect(SearchComponent.state().userInput).toEqual('');
    SearchComponent.find('input.searchInput').simulate('keyUp', {target: {value: 'Denver'}})
    expect(SearchComponent.state().userInput).toEqual('Denver');
  });

});
