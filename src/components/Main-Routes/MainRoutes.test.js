import React from 'react';
import { shallow } from 'enzyme';
import MainRoutes from './MainRoutes';

describe('MainRoutes', () => {
  let Component;

  beforeEach(() => {
    Component = shallow(<MainRoutes />);
  });

  it('renders MainRoutes without crashing', () => {
    expect(Component.length).toBeTruthy();
  });
});
