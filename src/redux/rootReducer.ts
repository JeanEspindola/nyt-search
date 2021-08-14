import { combineReducers } from 'redux'
import { articleListReducer } from './articleSearch/articleSearchReducer'

export const rootReducer = combineReducers({
  articleList: articleListReducer,
})
