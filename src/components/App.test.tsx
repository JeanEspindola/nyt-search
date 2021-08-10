import App from '../components/App'
import { WrappedRender } from '../test/testUtils'
import { screen } from '@testing-library/react'

describe('App', () => {
  it('renders App without crashing', () => {
    WrappedRender(<App />)

    expect(screen.getByText('"The New York Times" article search application')).toBeInTheDocument()
    expect(screen.getByText('Type search query term in here:')).toBeInTheDocument()
    expect(screen.getByText('There are no results to display.')).toBeInTheDocument()
  })
})
