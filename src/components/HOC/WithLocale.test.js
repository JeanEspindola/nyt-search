import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import WithLocale from './WithLocale';

describe('WithLocale', () => {
  let Component;
  let WrapperComponent;

  beforeEach(() => {
    Component = () => (
      <div>Component</div>
    );

    WrapperComponent = WithLocale(Component);
  });

  it('renders WithLocale without crashing', () => {
    const wrapper = shallow(<WrapperComponent />);
    expect(wrapper.length).toBeTruthy();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
