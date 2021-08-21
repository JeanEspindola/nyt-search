import { articleListReducer } from '../articleSearchReducer'
import {
  ArticleSearchActionTypes,
  ArticleSearchSubmitFailedAction,
  ArticleSearchSubmitInProgressAction,
  ArticleSearchSubmitSuccessAction,
} from '../articleSearchTypes'
import { dummyArticleSearchState } from '../../../test/mock/dummyArticleData'
import { formattedList } from '../../../test/mock/articleMockedData'

describe('articleSearchReducer', () => {
  test('articleSearchSubmitInProgress action', () => {
    const action: ArticleSearchSubmitInProgressAction = {
      type: ArticleSearchActionTypes.SEARCH_SUBMIT_INPROGRESS,
    }

    const newState = articleListReducer({ ...dummyArticleSearchState }, action)

    expect(newState.loading).toBeTruthy()
  })

  test('articleSearchSubmitFailed action', () => {
    const action: ArticleSearchSubmitFailedAction = {
      type: ArticleSearchActionTypes.SEARCH_SUBMIT_FAILED,
    }
    const state = { ...dummyArticleSearchState }
    state.loading = true

    const newState = articleListReducer(state, action)

    expect(newState.loading).toBeFalsy()
  })

  test('articleSearchSubmitSuccess action', () => {
    const action: ArticleSearchSubmitSuccessAction = {
      type: ArticleSearchActionTypes.SEARCH_SUBMIT_SUCCESS,
      payload: {
        query: 'test',
        page: 0,
        list: formattedList,
      },
    }
    const state = { ...dummyArticleSearchState }
    state.loading = true

    const newState = articleListReducer(state, action)

    expect(newState.loading).toBeFalsy()
    expect(newState.query).toEqual('test')
    expect(newState.page).toEqual(0)
    expect(newState.list).toEqual(formattedList)
  })
})
