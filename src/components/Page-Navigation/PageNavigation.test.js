import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import PageNavigation from './PageNavigation';
import en from '../../locales/en.json';

describe('PageNavigation', () => {
  const mockOnQuerySearch = jest.fn();
  const func = () => {};
  const page = 2;
  const query = 'search';
  let list;
  let Component;

  beforeEach(() => {
    list = [{ id: 1, headline: { main: 'a' } }, { id: 2, headline: { main: 'a' } }];

    Component = shallow(
      <PageNavigation
        list={list}
        page={page}
        query={query}
        onQuerySearch={mockOnQuerySearch}
      />,
      { context: { locale: en } },
    ).find('PageNavigation')
      .shallow();
  });

  it('renders PageNavigation without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });

  it('should call getNewValues and call onQuerySearch -- next', () => {
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
