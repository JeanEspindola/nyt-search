import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Loading from './Loading';

describe('Loading', () => {
  let Component;

  beforeEach(() => {
    Component = shallow(<Loading />);
  });

  it('renders without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });
});
