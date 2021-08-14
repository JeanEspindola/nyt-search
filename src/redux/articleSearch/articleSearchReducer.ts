import { listAddKey } from '../../utils/dataHelper'
import { ArticleListStateType, ArticleSearchActionTypes } from './articleSearchTypes'
import { ArticleSearchActions } from './articleSearchAction'

export const articleListInitialState: ArticleListStateType = {
  list: [],
  page: 0,
  query: '',
  loading: false,
}

export const articleListReducer = (
  state = articleListInitialState,
  action: ArticleSearchActions
): ArticleListStateType => {
  switch (action.type) {
    case ArticleSearchActionTypes.SEARCH_SUBMIT_SUCCESS:
      return {
        ...state,
        list: listAddKey(action.payload.list),
        page: action.payload.page,
        query: action.payload.query,
        loading: false,
      }
    case ArticleSearchActionTypes.SEARCH_SUBMIT_INPROGRESS:
      return {
        ...state,
        loading: true,
      }
    case ArticleSearchActionTypes.SEARCH_SUBMIT_FAILED:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
