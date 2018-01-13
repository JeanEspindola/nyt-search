import articleSearchService from '../utils/articleSearchService';
import { SEARCH_SUBMIT_SUCCESS } from '../utils/constants';

export function searchQuerySuccess(list, page) {
  return {
    type: SEARCH_SUBMIT_SUCCESS,
    list,
    page,
  };
}

export function loadSearchResults(query, page) {
  return dispatch => articleSearchService.getSearchResults(query, page).then((articleList) => {
    dispatch(searchQuerySuccess(articleList, page));
  }).catch((error) => {
    throw (error);
  });
}
