import PageNavigation from '../PageNavigation'
import { WrappedRender } from '../../../test/testUtils'
import { screen } from '@testing-library/react'
import { dummyRootState } from '../../../test/dummyRootState'
import { createDummyStore } from '../../../test/testHelper'
import userEvent from '@testing-library/user-event'
import { articleSearchSubmit } from '../../../redux/articleSearch/articleSearchAction'

describe('PageNavigation', () => {
  it('renders PageNavigation without crashing', () => {
    WrappedRender(<PageNavigation />)

    expect(screen.getByText('Previous Page')).toBeInTheDocument()
    expect(screen.getByText('Next Page')).toBeInTheDocument()
  })

  it('click on next button and dispatches', () => {
    const state = { ...dummyRootState }
    const { articleList } = state
    state.articleList = {
      ...articleList,
      query: 'test',
    }

    const store = createDummyStore(state)
    WrappedRender(<PageNavigation />, store)

    const nextPage = screen.getByText('Next Page')
    userEvent.click(nextPage)

    expect(store.dispatch).toHaveBeenCalledWith(articleSearchSubmit({ query: 'test', page: 1 }))
  })

  it('click on previous button and dispatches', () => {
    const state = { ...dummyRootState }
    const { articleList } = state
    state.articleList = {
      ...articleList,
      query: 'test2',
      page: 10,
    }

    const store = createDummyStore(state)
    WrappedRender(<PageNavigation />, store)

    const nextPage = screen.getByText('Previous Page')
    userEvent.click(nextPage)

    expect(store.dispatch).toHaveBeenCalledWith(articleSearchSubmit({ query: 'test2', page: 9 }))
  })
})
