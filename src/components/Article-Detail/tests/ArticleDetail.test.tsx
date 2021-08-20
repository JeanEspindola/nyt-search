import ArticleDetail from '../ArticleDetail'
import { WrappedRender } from '../../../test/testUtils'
import { screen } from '@testing-library/react'
import { dummyRootState } from '../../../test/dummyRootState'
import { createDummyStore } from '../../../test/testHelper'
import { formattedList } from '../../../test/mock/articleMockedData'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'

describe('ArticleDetail', () => {
  it('renders ArticleDetail correctly with no article', () => {
    WrappedRender(<ArticleDetail />)

    expect(screen.getByText('No details to show.')).toBeInTheDocument()
  })

  it('renders ArticleDetail correctly with article', () => {
    const state = { ...dummyRootState }
    const store = createDummyStore(state)

    const article = formattedList[2]

    const history = createMemoryHistory()
    history.push('/detail', { article })

    WrappedRender(<ArticleDetail />, store, history)

    expect(screen.getByRole('button', { name: 'Go to Results Page' })).toBeInTheDocument()
    expect(screen.getByText(article.headline.main)).toBeInTheDocument()
    expect(screen.getByText(article.snippet)).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: 'Read the Full Article',
      })
    ).toBeInTheDocument()
  })

  it('clicks on button and returns to result page', () => {
    const state = { ...dummyRootState }
    const store = createDummyStore(state)

    const article = formattedList[2]

    const history = createMemoryHistory()
    history.push('/detail', { article })

    const replaceSpy = jest.spyOn(history, 'replace')

    WrappedRender(<ArticleDetail />, store, history)

    const articleHeadline = screen.queryByText(article.headline.main)
    expect(articleHeadline).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'Go to Results Page' })

    userEvent.click(button)

    expect(replaceSpy).toHaveBeenCalledWith('/')
    expect(articleHeadline).not.toBeInTheDocument()
  })
})
