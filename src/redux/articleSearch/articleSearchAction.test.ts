import {
  articleSearchSubmit,
  articleSearchSubmitFailed,
  articleSearchSubmitInProgress,
  articleSearchSubmitSuccess,
} from './articleSearchAction'
import {
  ArticleSearchActionTypes,
  ArticleSearchSubmitType,
  ArticleSearchSuccessType,
} from './articleSearchTypes'
import { formattedList } from '../../mock/articleMockedData'

describe('articleSearchAction', () => {
  it('dispatches SEARCH_SUBMIT_INPROGRESS', () => {
    expect(articleSearchSubmitInProgress()).toEqual({
      type: ArticleSearchActionTypes.SEARCH_SUBMIT_INPROGRESS,
    })
  })

  it('dispatches SEARCH_SUBMIT_FAILED', () => {
    expect(articleSearchSubmitFailed()).toEqual({
      type: ArticleSearchActionTypes.SEARCH_SUBMIT_FAILED,
    })
  })

  it('dispatches SEARCH_SUBMIT_INIT', () => {
    const payload: ArticleSearchSubmitType = {
      page: 0,
      query: 'test',
    }

    expect(articleSearchSubmit(payload)).toEqual({
      type: ArticleSearchActionTypes.SEARCH_SUBMIT_INIT,
      payload,
    })
  })

  it('dispatches SEARCH_SUBMIT_SUCCESS', () => {
    const payload: ArticleSearchSuccessType = {
      list: formattedList,
      page: 0,
      query: 'test',
    }

    expect(articleSearchSubmitSuccess(payload)).toEqual({
      type: ArticleSearchActionTypes.SEARCH_SUBMIT_SUCCESS,
      payload,
    })
  })
})
