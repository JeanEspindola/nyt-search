import { SEARCH_SUBMIT_SUCCESS } from '../utils/constants';
import initialState from './initialState';

function articleList(state = { list: initialState.list, page: initialState.page }, action) {
  switch (action.type) {
    case SEARCH_SUBMIT_SUCCESS: {
      const newState = Object.assign([], state);
      newState.list = action.list;
      newState.page = action.page;
      return newState;
    }
    default:
      return state;
  }
}

export default articleList;
