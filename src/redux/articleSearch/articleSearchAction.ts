import {
  ArticleSearchActionTypes,
  ArticleSearchSubmitAction,
  ArticleSearchSubmitFailedAction,
  ArticleSearchSubmitInProgressAction,
  ArticleSearchSubmitSuccessAction,
  ArticleSearchSubmitType,
  ArticleSearchSuccessType,
} from './articleSearchTypes'

export const articleSearchSubmit = (
  payload: ArticleSearchSubmitType
): ArticleSearchSubmitAction => ({
  type: ArticleSearchActionTypes.SEARCH_SUBMIT_INIT,
  payload,
})

export const articleSearchSubmitInProgress = (): ArticleSearchSubmitInProgressAction => ({
  type: ArticleSearchActionTypes.SEARCH_SUBMIT_INPROGRESS,
})

export const articleSearchSubmitFailed = (): ArticleSearchSubmitFailedAction => ({
  type: ArticleSearchActionTypes.SEARCH_SUBMIT_FAILED,
})

export const articleSearchSubmitSuccess = (payload: ArticleSearchSuccessType) => ({
  type: ArticleSearchActionTypes.SEARCH_SUBMIT_SUCCESS,
  payload,
})

export type ArticleSearchActions =
  | ArticleSearchSubmitAction
  | ArticleSearchSubmitInProgressAction
  | ArticleSearchSubmitSuccessAction
  | ArticleSearchSubmitFailedAction
