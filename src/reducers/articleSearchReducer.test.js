import articleList from './articleSearchReducer';
import initialState from './initialState';
import { LOADING_INDICATOR_SUCCESS, SEARCH_SUBMIT_SUCCESS } from '../utils/constants';

describe('cartListReducer', () => {
  let action;

  it('Reducer --> SEARCH_SUBMIT_SUCCESS', () => {
    action = {
      list: [
        {
          article: 'a', snippet: 'a',
        },
        {
          article: 'b', snippet: 'b',
        },
        {
          article: 'c', snippet: 'c',
        },
      ],
      page: 3,
      query: 'test',
      type: SEARCH_SUBMIT_SUCCESS,
    };
    expect(articleList(initialState, action)).toMatchSnapshot();
  });

  it('Reducer --> LOADING_INDICATOR_SUCCESS', () => {
    action = {
      type: LOADING_INDICATOR_SUCCESS,
      loading: true,
    };

    expect(articleList(initialState, action)).toMatchSnapshot();
  });

  it('Reducer --> DEFAULT', () => {
    expect(articleList(initialState, { type: '' })).toMatchSnapshot();
  });

  it('Reducer --> return initial state', () => {
    expect(articleList(undefined, {})).toMatchSnapshot();
  });
});
