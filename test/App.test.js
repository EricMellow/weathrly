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



})