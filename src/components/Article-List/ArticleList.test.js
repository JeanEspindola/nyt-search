import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ArticleList from './ArticleList';
import en from '../../locales/en.json';

describe('ArticleList', () => {
  let list;
  let Component;

  it('renders ArticleList without crashing', () => {
    list = [{ id: 1, headline: { main: 'a' } }, { id: 2, headline: { main: 'a' } }];

    Component = shallow(
      <ArticleList list={list} />,
      { context: { locale: en } },
    ).first()
      .shallow()
      .first()
      .shallow()
      .find('ArticleList')
      .shallow();

    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });
});
