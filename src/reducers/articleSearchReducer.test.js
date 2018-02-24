import articleList from './articleSearchReducer';
import initialState from './initialState';
import { LOADING_INDICATOR_SUCCESS, SEARCH_SUBMIT_SUCCESS } from '../utils/constants';

describe('cartListReducer', () => {
  let state;
  let defaultState;

  beforeEach(() => {
    state = initialState;
    defaultState = {
      page: 0,
      query: '',
      loading: false,
      list: [],
    };
  });

  it('Reducer --> SEARCH_SUBMIT_SUCCESS', () => {
    const list = [
      {
        article: 'a', snippet: 'a',
      },
      {
        article: 'b', snippet: 'b',
      },
      {
        article: 'c', snippet: 'c',
      },
    ];
    const page = 3;
    const query = 'test';
    state = articleList(state, {
      type: SEARCH_SUBMIT_SUCCESS, list, page, query,
    });
    expect(state.list).toEqual(list);
    expect(state.page).toEqual(page);
    expect(state.query).toEqual(query);
  });

  it('Reducer --> LOADING_INDICATOR_SUCCESS', () => {
    const loading = true;
    state = articleList(state, {
      type: LOADING_INDICATOR_SUCCESS, loading,
    });
    expect(state.loading).toEqual(loading);
  });

  it('Reducer --> DEFAULT', () => {
    state = initialState;
    state = articleList(state, { type: '' });
    expect(state).toEqual(defaultState);
  });

  it('Reducer --> return initial state', () => {
    state = articleList(undefined, {});
    expect(state).toEqual(initialState);
  });
});
