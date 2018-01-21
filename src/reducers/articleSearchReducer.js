/*
* Article Search Reducer:
*
* Performs transformations and return the values to the state based on actions dispatched.
* There is basically one operation here, populating the list.
* I didn't create others, but could have status for loading and submit field as well.
*
* */
import { SEARCH_SUBMIT_SUCCESS, LOADING_INDICATOR_SUCCESS } from '../utils/constants';
import initialState from './initialState';
import articleSearchService from '../utils/articleSearchService';

function articleList(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUBMIT_SUCCESS: {
      const newState = Object.assign([], state);
      newState.list = articleSearchService.listAddKey(action.list);
      newState.page = action.page;
      newState.query = action.query;
      return newState;
    }
    case LOADING_INDICATOR_SUCCESS: {
      const newState = Object.assign([], state);
      newState.loading = action.loading;
      return newState;
    }
    default:
      return state;
  }
}

export default articleList;
