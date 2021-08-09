import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { LOADING_INDICATOR_SUCCESS, SEARCH_SUBMIT_SUCCESS } from '../../utils/constants';
import { loadingSubmit, loadSearchResults, searchQuerySuccess } from './articleSearchAction';
import { responseList } from '../../mock/articleMockedData';

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
  });

  it('creates a SEARCH_SUBMIT_SUCCESS action', () => {
    expect(loadingSubmit(false)).toEqual({
      type: LOADING_INDICATOR_SUCCESS,
      loading: false,
    });
  });

  // it('should handle loadSearchResults action - success', async () => {
  //   const response = { ...responseList }
  //
  //   // @ts-ignore
  //   fetch.mockResponseSuccess(response);
  //   await store.dispatch(loadSearchResults('test', 1));
  //   expect(store.getActions()).toEqual('')
  // });
});
