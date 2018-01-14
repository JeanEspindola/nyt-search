import React from 'react';
import { shallow } from 'enzyme';
import ArticleList from './ArticleList';

describe('ArticleList', () => {
  const mockOnQuerySearch = jest.fn;
  const page = 2;
  const query = 'search';
  const list = [];

  let Component;

  beforeEach(() => {
    Component = shallow(<ArticleList
      list={list}
      page={page}
      query={query}
      onQuerySearch={mockOnQuerySearch}
    />);
  });

  it('renders ArticleList without crashing', () => {
    expect(Component.length).toBeTruthy();
  });
});
