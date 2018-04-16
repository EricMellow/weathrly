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

  it('should have prefixTrie that defaults to a clean PrefixTrie', () => {
    const expectation = {
      root: {},
      suggestionArray: [],
      wordCount: 0
    };

    expect(SearchComponent.state('prefixTrie')).toEqual(expectation);
  });

});
