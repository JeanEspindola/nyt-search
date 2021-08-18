import { WrappedRender } from '../../../../test/testUtils'
import { screen } from '@testing-library/react'
import USAFlag from '../USAFlag'

describe('USAFlag', () => {
  it('renders USAFlag with no results', () => {
    WrappedRender(<USAFlag />)

    const flag = screen.getByRole('img', {
      name: /english/i,
    })
    expect(flag).toBeInTheDocument()
  })
})
