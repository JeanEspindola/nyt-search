import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SEARCH_SUBMIT_SUCCESS, LOADING_INDICATOR_SUCCESS } from '../utils/constants';
import { searchQuerySuccess, loadingSubmit, loadSearchResults } from './articleSearchAction';
import articleMockedData from '../mock/articleMockedData.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('articleSearchAction', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it('creates a LOADING_INDICATOR_SUCCESS action', () => {
    expect(searchQuerySuccess([], 1, 'test')).toEqual({
      type: SEARCH_SUBMIT_SUCCESS,
      list: [],
      page: 1,
      query: 'test',
    });
    expect(searchQuerySuccess([], 1, true)).toMatchSnapshot();
  });

  it('creates a SEARCH_SUBMIT_SUCCESS action', () => {
    expect(loadingSubmit(false)).toEqual({
      type: LOADING_INDICATOR_SUCCESS,
      loading: false,
    });
    expect(loadingSubmit(false)).toMatchSnapshot();
  });

  it('should handle loadSearchResults action - success', async () => {
    const response = articleMockedData.responseList;

    fetch.mockResponseSuccess(response);
    await store.dispatch(loadSearchResults('test', 1));
    expect(store.getActions()).toMatchSnapshot();
  });
});
