import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import API from '../../api/api'
import { Effect } from '@redux-saga/types'
import {
  ArticleSearchActionTypes,
  ArticleSearchSubmitAction,
  EnhancedArticle,
} from './articleSearchTypes'
import {
  articleSearchSubmitFailed,
  articleSearchSubmitInProgress,
  articleSearchSubmitSuccess,
} from './articleSearchAction'

export function* getArticleSearchSagas(
  action: ArticleSearchSubmitAction
): Generator<Effect, void, EnhancedArticle[]> {
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
  yield all([takeLatest(ArticleSearchActionTypes.SEARCH_SUBMIT, getArticleSearchSagas)])
}
