import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import PageNavigation from './PageNavigation';

describe('ArticleList', () => {
  const mockOnQuerySearch = jest.fn();
  const page = 2;
  const query = 'search';
  let list;
  let Component;

  it('renders PageNavigation without crashing', () => {
    list = [{ id: 1, headline: { main: 'a' } }, { id: 2, headline: { main: 'a' } }];

    Component = shallow(<PageNavigation
      list={list}
      page={page}
      query={query}
      onQuerySearch={mockOnQuerySearch}
    />);

    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });
});
