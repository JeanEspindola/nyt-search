import API from '../../api/api'
import { ArticleResponse, ArticleSearchActionTypes } from './articleSearchTypes'

export const loadingSubmit = (loading: boolean) => ({
  type: ArticleSearchActionTypes.LOADING_INDICATOR_SUCCESS,
  loading,
})

export const searchQuerySuccess = (list: ArticleResponse[], page: number, query: string) => ({
  type: ArticleSearchActionTypes.SEARCH_SUBMIT_SUCCESS,
  list,
  page,
  query,
})

// @ts-ignore
export const loadSearchResults = (query: string, page: number) => async dispatch => {
  dispatch(loadingSubmit(true))

  try {
    const response = await API.getSearchResults(query, page)

    dispatch(loadingSubmit(false))
    dispatch(searchQuerySuccess(response, page, query))
  } catch (error) {
    dispatch(loadingSubmit(false))
    throw error
  }
}
