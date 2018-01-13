import articleSearchService from '../utils/articleSearchService';
import { SEARCH_SUBMIT_SUCCESS } from '../utils/constants';

export function searchQuerySuccess(list) {
  return {
    type: SEARCH_SUBMIT_SUCCESS,
    list,
  };
}

export function loadSearchResults(query, page) {
  return dispatch => articleSearchService.getSearchResults(query, page).then((articleList) => {
    dispatch(searchQuerySuccess(articleList));
  }).catch((error) => {
    throw (error);
  });
}
