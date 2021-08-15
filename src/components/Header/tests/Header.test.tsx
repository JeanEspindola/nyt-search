import Header from '../Header'
import { screen } from '@testing-library/react'
import { WrappedRender } from '../../../test/testUtils'

describe('Header', () => {
  it('renders Header correctly', () => {
    WrappedRender(<Header />)

    expect(screen.getByText('"The New York Times" article search application')).toBeInTheDocument()
  })
})
