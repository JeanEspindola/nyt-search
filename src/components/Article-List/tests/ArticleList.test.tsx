import ArticleList from '../ArticleList'
import { WrappedRender } from '../../../test/testUtils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { dummyRootState } from '../../../test/dummyRootState'
import { createDummyStore } from '../../../test/testHelper'
import { formattedList } from '../../../test/mock/articleMockedData'
import { createMemoryHistory } from 'history'

describe('ArticleList', () => {
  it('renders ArticleList with no results', () => {
    WrappedRender(<ArticleList />)

    expect(screen.getByText('There are no results to display')).toBeInTheDocument()
  })

  it('renders ArticleList with loading status', () => {
    const newState = { ...dummyRootState }
    const { articleList } = newState
    newState.articleList = {
      ...articleList,
      loading: true,
    }

    const newStore = createDummyStore(newState)

    WrappedRender(<ArticleList />, newStore)

    expect(screen.queryByText('There are no results to display')).not.toBeInTheDocument()
  })

  it('renders ArticleList with results', () => {
    const newState = { ...dummyRootState }
    const { articleList } = newState
    newState.articleList = {
      ...articleList,
      list: [...formattedList],
    }

    const newStore = createDummyStore(newState)

    WrappedRender(<ArticleList />, newStore)

    expect(screen.queryByText('There are no results to display.')).not.toBeInTheDocument()
    expect(screen.getByText('Results:')).toBeInTheDocument()

    expect(screen.getByText(formattedList[0].headline.main)).toBeInTheDocument()
    expect(screen.getByText(formattedList[1].headline.main)).toBeInTheDocument()
    expect(screen.getByText(formattedList[2].headline.main)).toBeInTheDocument()
    expect(screen.getByText(formattedList[3].headline.main)).toBeInTheDocument()

    expect(screen.getByText('Previous Page')).toBeInTheDocument()
    expect(screen.getByText('Next Page')).toBeInTheDocument()
  })

  it('clicks on ArticleList Item and pushes to history', () => {
    const newState = { ...dummyRootState }
    const { articleList } = newState
    newState.articleList = {
      ...articleList,
      list: [...formattedList],
    }

    const history = createMemoryHistory()
    const pushSpy = jest.spyOn(history, 'push')

    const newStore = createDummyStore(newState)

    WrappedRender(<ArticleList />, newStore, history)
    const article = formattedList[2]

    const articleItem = screen.getByText(article.headline.main)

    userEvent.click(articleItem)

    expect(pushSpy).toHaveBeenCalledWith('/detail', { article })
  })
})
