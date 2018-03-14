import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from './Header';
import en from '../../locales/en.json';

describe('Header', () => {
  let Component;

  beforeEach(() => {
    Component = shallow(
      <Header />,
      { context: { locale: en } },
    )
      .find('Header')
      .shallow();
  });

  it('renders Header without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });
});
