import { WrappedRender } from '../../test/testUtils'
import { act, screen } from '@testing-library/react'
import { LanguageDropdownSelector } from '../Language'
import userEvent from '@testing-library/user-event'

describe('Language', () => {
  it('renders Language Dropdown Selector crashing', () => {
    WrappedRender(<LanguageDropdownSelector />)

    const usaFlag = screen.getByRole('button', {
      name: 'English',
    })

    const brFlag = screen.queryByRole('img', {
      name: 'Portuguese',
    })

    expect(brFlag).not.toBeInTheDocument()
    expect(usaFlag).toBeInTheDocument()
  })

  it('clicks on the button and change language selected', () => {
    WrappedRender(<LanguageDropdownSelector />)

    const button = screen.getByRole('button', {
      name: 'English',
    })

    act(() => {
      userEvent.click(button)
    })

    const brFlag = screen.getByRole('img', {
      name: 'Portuguese',
    })

    expect(brFlag).toBeInTheDocument()

    act(() => {
      userEvent.click(brFlag)
    })

    expect(
      screen.queryByRole('button', {
        name: 'English',
      })
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: 'Português',
      })
    ).toBeInTheDocument()
  })
})
