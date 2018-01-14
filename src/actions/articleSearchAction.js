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
