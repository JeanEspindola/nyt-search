/*
 * Configure Store:
 *
 * */
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default function rootStore() {
  return createStore(rootReducer, applyMiddleware(thunk))
}
