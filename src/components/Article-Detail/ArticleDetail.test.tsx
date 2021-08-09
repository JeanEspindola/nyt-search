import ArticleDetail from './ArticleDetail'
import { WrappedRender } from '../../test/testUtils'
import { screen } from '@testing-library/react'

describe('ArticleDetail', () => {
  it('renders ArticleDetail correctly with no article', () => {
    WrappedRender(<ArticleDetail />)

    expect(screen.getByText('No details to show.')).toBeInTheDocument()
  })

  // it('renders ArticleDetail correctly with article', () => {
  //
  //   const newState = { ...dummyRootState }
  //   const { router } = newState
  //   newState.router = {
  //     ...router,
  //     // @ts-ignore
  //     location: { state: { article: formattedList[0] }},
  //   }
  //
  //   const newStore = createDummyStore(newState)
  //
  //   WrappedRender(<ArticleDetail />)
  //
  //   expect(screen.queryByText('There are no results to display.')).not.toBeInTheDocument()
  //   expect(screen.getByText('Results:')).toBeInTheDocument()
  //
  //   expect(screen.getByText(formattedList[0].headline.main)).toBeInTheDocument()
  //   expect(screen.getByText(formattedList[1].headline.main)).toBeInTheDocument()
  //   expect(screen.getByText(formattedList[2].headline.main)).toBeInTheDocument()
  //   expect(screen.getByText(formattedList[3].headline.main)).toBeInTheDocument()
  //
  //   expect(screen.getByText('Previous Page')).toBeInTheDocument()
  //   expect(screen.getByText('Previous')).toBeInTheDocument()
  //   expect(screen.getByText('Next Page')).toBeInTheDocument()
  //   expect(screen.getByText('Next')).toBeInTheDocument()
  // })
})

