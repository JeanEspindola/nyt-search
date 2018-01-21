import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { storeFake } from '../../mock/storeFake';
import SearchInputContainer from './SearchInputContainer';
import SearchInput from './SearchInput';

describe('SearchInputContainer', () => {
  let Component;
  let ChoiceComponent;

  beforeEach(() => {
    const store = storeFake({});

    const wrapper = mount(
      <Provider store={store}>
        <SearchInputContainer />
      </Provider>
    );

    Component = wrapper.find(SearchInputContainer);
    ChoiceComponent = Component.find(SearchInput);
  });

  it('renders SearchInput connected container', () => {
    expect(Component.length).toBeTruthy();
    expect(ChoiceComponent.length).toBeTruthy();
  });
});