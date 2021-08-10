/*
 * Initial State:
 *
 * It holds the initial state for the application store.
 * Page and query values are stored and passed back so the navigation buttons can use them
 * to make next or prev page call.
 *
 * */
import { InitialStateType, RootStateType } from './rootTypes'

export const initialState: InitialStateType = {
  list: [],
  page: 0,
  query: '',
  loading: false,
}

export const dummyRootState: RootStateType = {
  articleList: initialState,
}
