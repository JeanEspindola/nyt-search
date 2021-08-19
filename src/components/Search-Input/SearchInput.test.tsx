import SearchInput from './SearchInput'
import { screen } from '@testing-library/react'
import { WrappedRender } from '../../test/testUtils'
import { dummyRootState } from '../../test/dummyRootState'
import { createDummyStore } from '../../test/testHelper'
import userEvent, { specialChars } from '@testing-library/user-event'
import { articleSearchSubmit } from '../../redux/articleSearch/articleSearchAction'

describe('SearchInput', () => {
  it('renders SearchInput correctly', () => {
    WrappedRender(<SearchInput />)
    expect(screen.getByText('Type search query term in here:')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search your terms here')).toBeInTheDocument()
  })

  it('do not dispatch if input is empty', () => {
    const state = { ...dummyRootState }
    const store = createDummyStore(state)

    WrappedRender(<SearchInput />, store)
    const input = screen.getByPlaceholderText('Search your terms here')

    userEvent.type(input, specialChars.enter)

    expect(store.dispatch).not.toHaveBeenCalledWith(articleSearchSubmit({ query: '', page: 0 }))
  })

  it('dispatch on search input submit', () => {
    const state = { ...dummyRootState }
    const store = createDummyStore(state)

    WrappedRender(<SearchInput />, store)
    const input = screen.getByPlaceholderText('Search your terms here')

    userEvent.type(input, `test${specialChars.enter}`)

    expect(store.dispatch).toHaveBeenCalledWith(articleSearchSubmit({ query: 'test', page: 0 }))
  })
})
