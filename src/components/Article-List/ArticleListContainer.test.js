import React from 'react';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../../mock/shallowWithStore';
import ArticleListContainer from './ArticleListContainer';

describe('ArticleListContainer', () => {
  let ConnectedComponent;

  it('renders ArticleList connected container', () => {
    const testState = {
      articleList: {
        list: [],
        loading: false,
      },
    };

    const store = createMockStore(testState);
    ConnectedComponent = shallowWithStore(<ArticleListContainer />, store);
    expect(ConnectedComponent.length).toBeTruthy();
    expect(ConnectedComponent.props().loading).toBeFalsy();
    expect(ConnectedComponent.props().list).toEqual([]);
  });
});
