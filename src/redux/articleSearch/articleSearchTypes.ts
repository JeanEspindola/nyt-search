export interface ArticleResponse {
  id: number
  webUrl: string
  pubDate: string
  snippet: string
  headline: {
    contentKicker?: string
    kicker?: string
    main: string
    name?: string
    printHeadline?: string
    seo?: string
  }
}

export interface ArticleListStateType {
  list: ArticleResponse[]
  page: number
  query: string
  loading: boolean
}

export enum ArticleSearchActionTypes {
  SEARCH_SUBMIT_INIT = 'SEARCH_SUBMIT_INIT',
  SEARCH_SUBMIT_SUCCESS = 'SEARCH_SUBMIT_SUCCESS',
  SEARCH_SUBMIT_INPROGRESS = 'SEARCH_SUBMIT_INPROGRESS',
  SEARCH_SUBMIT_FAILED = 'SEARCH_SUBMIT_FAILED',
}

export type ArticleSearchSuccessType = {
  list: ArticleResponse[]
  page: number
  query: string
}

export type ArticleSearchSubmitType = {
  page: number
  query: string
}

export type ArticleSearchSubmitAction = {
  type: ArticleSearchActionTypes.SEARCH_SUBMIT_INIT
  payload: ArticleSearchSubmitType
}

export type ArticleSearchSubmitInProgressAction = {
  type: ArticleSearchActionTypes.SEARCH_SUBMIT_INPROGRESS
}

export type ArticleSearchSubmitFailedAction = {
  type: ArticleSearchActionTypes.SEARCH_SUBMIT_FAILED
}

export type ArticleSearchSubmitSuccessAction = {
  type: ArticleSearchActionTypes.SEARCH_SUBMIT_SUCCESS
  payload: ArticleSearchSuccessType
}
