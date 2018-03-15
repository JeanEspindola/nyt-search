import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import EmptyList from './EmptyList';
import en from '../../locales/en.json';

describe('EmptyList', () => {
  let Component;

  beforeEach(() => {
    Component = shallow(
      <EmptyList />,
      { context: { locale: en } },
    ).find('EmptyList')
      .shallow();
  });

  it('renders without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });
});
