import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../src/components/Welcome';
import PrefixTrie from '../src/components/Prefixtrie';
import TenDayForecast from '../src/components/TenDayForecast';
import SevenHourForecast from '../src/components/SevenHourForecast';
import Suggestions from '../src/components/Suggestions';

describe('welcome component', () => {
  let WelcomeComponent;
  let prefixTrie;

  beforeEach(() => {
    WelcomeComponent = shallow(<Welcome />);
  });

  it('should exist', () => {
    expect(WelcomeComponent).toBeDefined();
  });

  it('should have an userInput state that defaults to empty string', () => {
    const expectation = ''
    expect(WelcomeComponent.state('userInput')).toEqual(expectation)
  });

  it('should instantiate a new prefix trie', () => {
    const expectation = {}
    expect(WelcomeComponent.find(PrefixTrie))
  });

  it('should render a current weather card with output from the props it was passed', () => {
    expect(WelcomeComponent.find(Suggestions));
  });
 
})
