import ArticleList from './ArticleList'
import { WrappedRender } from '../../test/testUtils'
import { screen } from '@testing-library/react'
import { dummyRootState } from '../../redux/reducers/initialState'
import { createDummyStore } from '../../test/testHelper'
import { formattedList } from '../../mock/articleMockedData'

describe('ArticleList', () => {
  it('renders ArticleList with no results', () => {
    WrappedRender(<ArticleList />)

    expect(screen.getByText('There are no results to display.')).toBeInTheDocument()
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

    expect(screen.queryByText('There are no results to display.')).not.toBeInTheDocument()
  })

  it('renders ArticleList with results', () => {
    const newState = { ...dummyRootState }
    const { articleList } = newState
    newState.articleList = {
      ...articleList,
      list: [ ...formattedList ],
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
    expect(screen.getByText('Previous')).toBeInTheDocument()
    expect(screen.getByText('Next Page')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
  })
})
