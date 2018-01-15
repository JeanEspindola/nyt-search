/*
* Article Search Action:
*
* All actions taken from components in order to access/modify the store.
* In this case there is single action, when searching query success.
*
* */
import articleSearchService from '../utils/articleSearchService';
import { SEARCH_SUBMIT_SUCCESS } from '../utils/constants';

export function searchQuerySuccess(list, page, query) {
  return {
    type: SEARCH_SUBMIT_SUCCESS,
    list,
    page,
    query,
  };
}

export function loadSearchResults(query, page) {
  return dispatch => articleSearchService.getSearchResults(query, page).then((articleList) => {
    dispatch(searchQuerySuccess(articleList, page, query));
  }).catch((error) => {
    throw (error);
  });
}
