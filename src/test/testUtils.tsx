import { RootStateType } from '../redux/rootTypes'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { createDummyStore } from './testHelper'
import { dummyRootState } from './dummyRootState'
import React from 'react'
import { Language, LanguageIntlProvider } from '../config/Language'

export const WrappedRender = (component: React.ReactElement, store?: Store<RootStateType>) => {
  const Wrapper: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => (
    <BrowserRouter>
      <Provider store={store ?? createDummyStore(dummyRootState)}>
        <Language>
          <LanguageIntlProvider>{children}</LanguageIntlProvider>
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
