import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SearchInput from './SearchInput';
import en from '../../locales/en.json';

describe('SearchInput', () => {
  const mockOnQuerySearch = jest.fn();
  const func = () => {};

  let Component;

  beforeEach(() => {
    Component = shallow(
      <SearchInput onQuerySearch={mockOnQuerySearch} />,
      { context: { locale: en } },
    ).find('SearchInput')
      .shallow();
  });

  it('renders SearchInput without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });

  it('should call onSearch and not call onQuerySearch when query field is empty', () => {
    const event = {
      preventDefault: func,
    };

    Component.instance().onSearch(event);
    expect(mockOnQuerySearch).not.toHaveBeenCalled();
  });

  it('should call onSearch and call onQuerySearch when query field has value', () => {
    const event = {
      preventDefault: func,
    };

    Component.setState({ query: 'test' });
    Component.instance().onSearch(event);
    expect(mockOnQuerySearch).toHaveBeenCalledWith('test', 0);
  });

  it('should call onChangeQuery and update state value', () => {
    const event = {
      target: {
        name: 'query',
        value: 'new',
      },
    };

    Component.setState({ query: 'test' });
    Component.instance().onChangeQuery(event);
    expect(Component.state().query).toEqual('new');
  });
});
