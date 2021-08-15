import { AnyAction } from 'redux'
import { runSaga, SagaIterator } from 'redux-saga'
import { dummyRootState } from '../../../test/dummyRootState'
import API from '../../../api/api'
import { RootStateType } from '../../rootTypes'
import { mockApi, mockConsoleError, TestDispatchType } from '../../../test/testHelper'
import { ArticleSearchActionTypes, ArticleSearchSubmitAction } from '../articleSearchTypes'
import { articleSearchSaga } from '../articleSearchSagas'
import { responseList } from '../../../test/mock/articleMockedData'

jest.mock('../../../api/api')

describe('articleSearchSaga', () => {
  const query = 'test'
  const page = 0
  const list = responseList
  const articleSearchAction: ArticleSearchSubmitAction = {
    type: ArticleSearchActionTypes.SEARCH_SUBMIT_INIT,
    payload: {
      query,
      page,
    },
  }

  it('should load articles successfully', async () => {
    mockApi(API.getSearchResults, 200, list)

    const dispatched: TestDispatchType<{}>[] = []
    const saga = runSaga<AnyAction, RootStateType, () => SagaIterator>(
      {
        dispatch: action => dispatched.push(action),
        getState: () => dummyRootState,
      },
      () => articleSearchSaga(articleSearchAction)
    )

    await saga.toPromise()
    expect(dispatched).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: ArticleSearchActionTypes.SEARCH_SUBMIT_INPROGRESS,
        }),
        expect.objectContaining({
          type: ArticleSearchActionTypes.SEARCH_SUBMIT_SUCCESS,
          payload: {
            list,
            query,
            page,
          },
        }),
      ])
    )
  })

  it('should fail when loading articles', async () => {
    mockConsoleError()
    mockApi(API.getSearchResults, 400, {})

    const dispatched: TestDispatchType<{}>[] = []
    const saga = runSaga<AnyAction, RootStateType, () => SagaIterator>(
      {
        dispatch: action => dispatched.push(action),
        getState: () => dummyRootState,
      },
      () => articleSearchSaga(articleSearchAction)
    )

    await saga.toPromise()
    expect(dispatched).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: ArticleSearchActionTypes.SEARCH_SUBMIT_INPROGRESS,
        }),
        expect.objectContaining({
          type: ArticleSearchActionTypes.SEARCH_SUBMIT_FAILED,
        }),
      ])
    )
  })
})
