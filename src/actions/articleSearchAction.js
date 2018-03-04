/*
* Article Search Action:
*
* All actions taken from components in order to access/modify the store.
* In this case there is single action, when searching query success.
*
* */
import articleSearchService from '../utils/articleSearchService';
import { SEARCH_SUBMIT_SUCCESS, LOADING_INDICATOR_SUCCESS } from '../utils/constants';

export const loadingSubmit = loading => ({
  type: LOADING_INDICATOR_SUCCESS,
  loading,
});

export const searchQuerySuccess = (list, page, query) => ({
  type: SEARCH_SUBMIT_SUCCESS,
  list,
  page,
  query,
});

export const loadSearchResults = (query, page) => async (dispatch) => {
  dispatch(loadingSubmit(true));

  try {
    const articleList = await articleSearchService.getSearchResults(query, page);
    dispatch(loadingSubmit(false));
    dispatch(searchQuerySuccess(articleList, page, query));
  } catch (error) {
    dispatch(loadingSubmit(false));
    throw (error);
  }
};
