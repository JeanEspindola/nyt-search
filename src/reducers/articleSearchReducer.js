import { SEARCH_SUBMIT_SUCCESS } from '../utils/constants';
import initialState from './initialState';

function articleList(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUBMIT_SUCCESS: {
      const newState = Object.assign([], state);
      newState.list = action.list;
      newState.page = action.page;
      newState.query = action.query;
      return newState;
    }
    default:
      return state;
  }
}

export default articleList;
