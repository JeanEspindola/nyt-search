import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  const mockOnQuerySearch = jest.fn;

  let Component;

  beforeEach(() => {
    Component = shallow(<SearchInput onQuerySearch={mockOnQuerySearch} />);
  });

  it('renders SearchInput without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });
});
