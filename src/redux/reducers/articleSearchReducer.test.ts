import articleList from '../reducers/articleSearchReducer';
import { initialState } from './initialState';
import {
  LOADING_INDICATOR_SUCCESS,
  SEARCH_SUBMIT_SUCCESS,
} from '../../utils/constants'

describe('articleSearchReducer', () => {
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

    const newState = articleList(initialState, action);

    expect(newState.list).toEqual(action.list);
    expect(newState.query).toEqual(action.query);
    expect(newState.page).toEqual(action.page);
  });

  it('Reducer --> LOADING_INDICATOR_SUCCESS', () => {
    action = {
      type: LOADING_INDICATOR_SUCCESS,
      loading: true,
    };

    const newState = articleList(initialState, action);

    expect(newState.loading).toBeTruthy();
  });
});
