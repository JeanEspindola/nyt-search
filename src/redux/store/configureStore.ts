/*
 * Configure Store:
 *
 * */
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/indexReducer'
import { initialState } from '../reducers/initialState'

export default function configureStore() {
  return createStore(
    rootReducer,
    // @ts-ignore
    initialState,
    applyMiddleware(thunk)
  )
}
