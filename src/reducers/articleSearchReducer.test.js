import articleList from './articleSearchReducer';
import initialState from './initialState';
import { SEARCH_SUBMIT_SUCCESS } from '../utils/constants';

describe('cartListReducer', () => {
  let list;
  let page;
  let query;
  let state;

  beforeEach(() => {
    list = [
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
    page = 0;
    query = 'search';
  });

  it('Reducer --> SEARCH_SUBMIT_SUCCESS', () => {
    state = initialState;
    state = articleList(state, {
      type: SEARCH_SUBMIT_SUCCESS, list, page, query,
    });
    expect(state.list).toEqual(list);
    expect(state.page).toEqual(page);
    expect(state.query).toEqual(query);
  });

  it('Reducer --> DEFAULT', () => {
    state = {
      list,
      page,
      query,
    };
    state = articleList(state, {
      type: '',
    });
    expect(state).toEqual({ list, page, query });
  });

  it('Reducer --> return initial state', () => {
    state = {
      list,
      page,
      query,
    };
    state = articleList(undefined, {});
    expect(state).toEqual(initialState);
  });
});
