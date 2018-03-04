import React from 'react';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../../mock/shallowWithStore';
import PageNavigationContainer from './PageNavigationContainer';

describe('PageNavigationContainer', () => {
  let ConnectedComponent;

  it('renders PageNavigation connected container', () => {
    const testState = {
      articleList: {
        page: 1,
        query: 'test',
      },
    };

    const store = createMockStore(testState);
    ConnectedComponent = shallowWithStore(<PageNavigationContainer />, store);
    expect(ConnectedComponent.length).toBeTruthy();
    expect(ConnectedComponent.props().page).toEqual(1);
    expect(ConnectedComponent.props().query).toEqual('test');
  });
});
