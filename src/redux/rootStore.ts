import { applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import { RootStateType } from './rootTypes'
import allSagas from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export function configureStore(): Store<RootStateType> {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

  allSagas.map(saga => sagaMiddleware.run(saga))

  return store
}
