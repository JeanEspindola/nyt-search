import { WrappedRender } from '../../../../test/testUtils'
import { screen } from '@testing-library/react'
import BRFlag from '../BRFlag'

describe('BRFlag', () => {
  it('renders BRFlag with no results', () => {
    WrappedRender(<BRFlag />)

    const flag = screen.getByRole('img', {
      name: 'Portuguese',
    })
    expect(flag).toBeInTheDocument()
  })
})
