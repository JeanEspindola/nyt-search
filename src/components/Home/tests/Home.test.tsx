import Home from '../Home'
import { screen } from '@testing-library/react'
import { WrappedRender } from '../../../test/testUtils'

describe('Home', () => {
  it('renders Home correctly', () => {
    WrappedRender(<Home />)

    expect(screen.getByText('Type search query term in here:')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search your terms here')).toBeInTheDocument()
    expect(screen.getByText('There are no results to display')).toBeInTheDocument()
  })
})
