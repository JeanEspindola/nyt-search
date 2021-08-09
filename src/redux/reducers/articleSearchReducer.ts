/*
* Article Search Reducer:
*
* Performs transformations and return the values to the state based on actions dispatched.
* There is basically one operation here, populating the list.
* I didn't create others, but could have status for loading and submit field as well.
*
* */
import { LOADING_INDICATOR_SUCCESS, SEARCH_SUBMIT_SUCCESS } from '../../utils/constants';
import { initialState } from './initialState';
import articleSearchService from '../../utils/articleSearchService';
import { AnyAction } from 'redux'

function articleList(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SEARCH_SUBMIT_SUCCESS:
      return {
        ...state,
        list: articleSearchService.listAddKey(action.list),
        page: action.page,
        query: action.query,
      };
    case LOADING_INDICATOR_SUCCESS:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}

export default articleList;
