/*
 * Article Search Action:
 *
 * All actions taken from components in order to access/modify the store.
 * In this case there is single action, when searching query success.
 *
 * */
import { LOADING_INDICATOR_SUCCESS, SEARCH_SUBMIT_SUCCESS } from '../../utils/constants'
import API from '../../api/api'

export const loadingSubmit = (loading: boolean) => ({
  type: LOADING_INDICATOR_SUCCESS,
  loading,
})

export const searchQuerySuccess = (list: Array<never>, page: number, query: string) => ({
  type: SEARCH_SUBMIT_SUCCESS,
  list,
  page,
  query,
})

// @ts-ignore
export const loadSearchResults = (query: string, page: number) => async (dispatch) => {
  dispatch(loadingSubmit(true))

  try {
    const response = await API.getSearchResults(query, page)

    dispatch(loadingSubmit(false))
    // @ts-ignore
    dispatch(searchQuerySuccess(response, page, query))
  } catch (error) {
    dispatch(loadingSubmit(false))
    throw error
  }
}
