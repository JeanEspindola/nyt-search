import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  const mockOnQuerySearch = jest.fn();

  let Component;

  it('renders SearchInput without crashing', () => {
    Component = shallow(<SearchInput onQuerySearch={mockOnQuerySearch} />);
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });

  it('should call onSearch and not call onQuerySearch when query field is empty', () => {
    Component = shallow(<SearchInput onQuerySearch={mockOnQuerySearch} />);

    const func = () => {};
    const event = {
      preventDefault: func,
    };

    Component.instance().onSearch(event);
    expect(mockOnQuerySearch).not.toHaveBeenCalled();
  });

  it('should call onSearch and call onQuerySearch when query field has value', () => {
    Component = shallow(<SearchInput onQuerySearch={mockOnQuerySearch} />);

    const func = () => {};
    const event = {
      preventDefault: func,
    };

    Component.setState({ query: 'test' });
    Component.instance().onSearch(event);
    expect(mockOnQuerySearch).toHaveBeenCalledWith('test', 0);
  });
});
