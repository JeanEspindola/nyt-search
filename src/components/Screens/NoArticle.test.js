import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NoArticle from './NoArticle';
import en from '../../locales/en.json';

describe('EmptyList', () => {
  let Component;

  beforeEach(() => {
    Component = shallow(
      <NoArticle />,
      { context: { locale: en } },
    ).find('NoArticle')
      .shallow();
  });

  it('renders without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });
});
