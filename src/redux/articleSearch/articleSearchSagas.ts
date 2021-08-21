import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import API from '../../api/api'
import { Effect } from '@redux-saga/types'
import {
  ArticleResponse,
  ArticleSearchActionTypes,
  ArticleSearchSubmitAction,
} from './articleSearchTypes'
import {
  articleSearchSubmitFailed,
  articleSearchSubmitInProgress,
  articleSearchSubmitSuccess,
} from './articleSearchAction'

export function* articleSearchSaga(
  action: ArticleSearchSubmitAction
): Generator<Effect, void, ArticleResponse[]> {
  try {
    const { query, page } = action.payload
    yield put(articleSearchSubmitInProgress())
    const list = yield call(API.getSearchResults, query, page)
    yield put(articleSearchSubmitSuccess({ page, query, list }))
  } catch (err) {
    yield put(articleSearchSubmitFailed())
  }
}

export default function* articleSearchWatcher() {
  yield all([takeLatest(ArticleSearchActionTypes.SEARCH_SUBMIT_INIT, articleSearchSaga)])
}
