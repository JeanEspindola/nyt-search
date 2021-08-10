export interface ArticleListStateType {
  list: Array<never>
  page: number
  query: string
  loading: boolean
}

export enum ArticleSearchActionTypes {
  SEARCH_SUBMIT = 'SEARCH_SUBMIT',
  SEARCH_SUBMIT_SUCCESS = 'SEARCH_SUBMIT_SUCCESS',
  SEARCH_SUBMIT_INPROGRESS = 'SEARCH_SUBMIT_INPROGRESS',
  SEARCH_SUBMIT_FAILED = 'SEARCH_SUBMIT_FAILED',
  LOADING_INDICATOR_SUCCESS = 'LOADING_INDICATOR_SUCCESS',
}

export type ArticleSearchSuccessType = {
  list: Array<never>
  page: number
  query: string
}

export type ArticleSearchSubmitType = {
  page: number
  query: string
}
