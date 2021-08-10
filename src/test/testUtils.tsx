import { RootStateType } from '../redux/rootTypes'
import { translationMessages } from '../locales'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { createDummyStore } from './testHelper'
import { dummyRootState } from '../redux/reducers/initialState'
import React from 'react'

export const WrappedRender = (
  component: React.ReactElement,
  store?: Store<RootStateType>,
) => {
  const Wrapper: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
    children,
  }) => (
    <BrowserRouter>
      <Provider store={store ?? createDummyStore(dummyRootState)}>
        <IntlProvider locale={'en'} messages={translationMessages.en}>
          {children}
        </IntlProvider>
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
