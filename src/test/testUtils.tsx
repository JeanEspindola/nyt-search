import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, History, LocationState } from 'history'
import { RootStateType } from '../redux/rootTypes'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { createDummyStore } from './testHelper'
import { dummyRootState } from './dummyRootState'
import { Language, LanguageIntlProvider } from '../config/Language'

export const WrappedRender = (
  component: React.ReactElement,
  store?: Store<RootStateType>,
  history?: History<LocationState>
) => {
  const Wrapper: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => (
    <BrowserRouter>
      <Provider store={store ?? createDummyStore(dummyRootState)}>
        <Language>
          <LanguageIntlProvider>
            <Router history={history ?? createMemoryHistory()}>{children}</Router>
          </LanguageIntlProvider>
        </Language>
      </Provider>
    </BrowserRouter>
  )

  return {
    store,
    ...render(component, {
      wrapper: Wrapper,
    }),
  }
}
