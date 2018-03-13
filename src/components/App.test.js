import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './App';
import en from '../locales/en.json';

describe('App', () => {
  let Component;

  beforeEach(() => {
    Component = shallow(<App />);
  });

  it('renders App without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });

  it('should call getChildContext and return current locale', () => {
    expect(Component.instance().getChildContext().locale).toEqual(en);
  });
});
