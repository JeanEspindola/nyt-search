/*
 * Initial State:
 *
 * It holds the initial state for the application store.
 * Page and query values are stored and passed back so the navigation buttons can use them
 * to make next or prev page call.
 *
 * */
import { RootStateType } from '../rootTypes'
import { articleListInitialState } from '../articleSearch/articleSearchReducer'

export const dummyRootState: RootStateType = {
  articleList: articleListInitialState,
}
