import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import WithCondition from './WithCondition';

describe('WithCondition', () => {
  let Component;
  let WrapperComponent;
  const emptyComp = <p>There are no results to display.</p>;
  const props = {
    list: [],
  };

  it('renders WithCondition when list is invalid - without crashing', () => {
    const func = () => true;
    WrapperComponent = WithCondition(func, emptyComp)(Component);
    const wrapper = shallow(<WrapperComponent {...props} />);
    expect(wrapper.length).toBeTruthy();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders WithCondition when list is valid - without crashing', () => {
    Component = () => (
      <div>Component</div>
    );

    const func = () => false;
    WrapperComponent = WithCondition(func, emptyComp)(Component);
    props.list = [
      { test: 'value' },
    ];

    const wrapper = shallow(<WrapperComponent {...props} />);
    expect(wrapper.length).toBeTruthy();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
