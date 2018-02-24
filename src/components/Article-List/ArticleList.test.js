import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ArticleList from './ArticleList';

describe('ArticleList', () => {
  let list;
  let Component;

  it('renders ArticleList without crashing', () => {
    list = [{ id: 1, headline: { main: 'a' } }, { id: 2, headline: { main: 'a' } }];

    Component = shallow(<ArticleList
      list={list}
    />);

    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });

  it('renders ArticleList with list empty', () => {
    const text = 'There are no results to display.';
    list = [];
    Component = shallow(<ArticleList
      list={list}
    />);
    expect(Component.find('p').text()).toBe(text);
  });
});
