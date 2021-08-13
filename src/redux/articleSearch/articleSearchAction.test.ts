import { loadingSubmit, searchQuerySuccess } from './articleSearchAction'
import { ArticleSearchActionTypes } from './articleSearchTypes'

describe('articleSearchAction', () => {
  it('creates a LOADING_INDICATOR_SUCCESS action', () => {
    expect(searchQuerySuccess([], 1, 'test')).toEqual({
      type: ArticleSearchActionTypes.SEARCH_SUBMIT_SUCCESS,
      list: [],
      page: 1,
      query: 'test',
    })
  })

  it('creates a SEARCH_SUBMIT_SUCCESS action', () => {
    expect(loadingSubmit(false)).toEqual({
      type: ArticleSearchActionTypes.LOADING_INDICATOR_SUCCESS,
      loading: false,
    })
  })

  // it('should handle loadSearchResults action - success', async () => {
  //   const response = { ...responseList }
  //
  //   // @ts-ignore
  //   fetch.mockResponseSuccess(response);
  //   await store.dispatch(loadSearchResults('test', 1));
  //   expect(store.getActions()).toEqual('')
  // });
})
