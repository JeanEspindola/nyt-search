import React from 'react';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../../mock/shallowWithStore';
import SearchInputContainer from './SearchInputContainer';

describe('SearchInputContainer', () => {
  let ConnectedComponent;

  beforeEach(() => {
    const store = createMockStore({});

    ConnectedComponent = shallowWithStore(<SearchInputContainer />, store);
  });

  it('renders SearchInput connected container', () => {
    expect(ConnectedComponent.length).toBeTruthy();
  });
});
