import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let Component;

  beforeEach(() => {
    Component = shallow(<Home />);
  });

  it('renders Home without crashing', () => {
    expect(Component.length).toBeTruthy();
  });
});
