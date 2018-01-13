import articleSearchService from '../utils/articleSearchService';
import { SEARCH_SUBMIT_SUCCESS, CART_CLEAR_SUCCESS, ITEM_DELETE_SUCCESS, ITEM_SUBMIT_SUCCESS } from '../utils/constants';

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

/*
export function deleteItemSuccess(itemId) {
  return {
    type: ITEM_DELETE_SUCCESS,
    itemId,
  };
}

export function clearCartSuccess() {
  return {
    type: CART_CLEAR_SUCCESS,
  };
}

export function addCartItemSuccess(item) {
  return {
    type: ITEM_SUBMIT_SUCCESS,
    item,
  };
}

export function cleanUpCartList() {
  return dispatch => dispatch(clearCartSuccess());
}

export function addCartItem(item) {
  return dispatch => dispatch(addCartItemSuccess(item));
}

export function deleteCartItem(itemId) {
  return dispatch => dispatch(deleteItemSuccess(itemId));
}
*/
