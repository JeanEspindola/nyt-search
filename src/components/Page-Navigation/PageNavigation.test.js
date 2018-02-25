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

  beforeEach(() => {
    list = [{ id: 1, headline: { main: 'a' } }, { id: 2, headline: { main: 'a' } }];

    Component = shallow(<PageNavigation
      list={list}
      page={page}
      query={query}
      onQuerySearch={mockOnQuerySearch}
    />);
  });

  it('renders PageNavigation without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });

  it('should call getNewValues and call onQuerySearch -- next', () => {
    const func = () => {};
    const event = {
      preventDefault: func,
      target: {
        name: 'next',
      },
    };
    Component.instance().getNewValues(event);
    expect(mockOnQuerySearch).toHaveBeenCalledWith('search', 3);
  });

  it('should call getNewValues and call onQuerySearch -- next', () => {
    const func = () => {};
    const event = {
      preventDefault: func,
      target: {
        name: 'previous',
      },
    };
    Component.instance().getNewValues(event);
    expect(mockOnQuerySearch).toHaveBeenCalledWith('search', 1);
  });
});
