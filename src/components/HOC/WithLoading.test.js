import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import WithLoading from './WithLoading';

describe(' WithLoading', () => {
  let Component;
  let WrapperComponent;

  it('renders WithLoading when isLoading true - without crashing', () => {
    WrapperComponent = WithLoading('loading')(Component);
    const wrapper = shallow(<WrapperComponent loading />);
    expect(wrapper.length).toBeTruthy();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders WithLoading when isLoading false - without crashing', () => {
    Component = () => (
      <div>Component</div>
    );
    WrapperComponent = WithLoading('loading')(Component);

    const wrapper = shallow(<WrapperComponent />);
    expect(wrapper.length).toBeTruthy();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
