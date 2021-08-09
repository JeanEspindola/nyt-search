import SearchInput from './SearchInput'
import { screen } from '@testing-library/react'
import { WrappedRender } from '../../test/testUtils'

describe('SearchInput', () => {
   beforeEach(() => {
     WrappedRender(<SearchInput />);
  })

  it('renders SearchInput correctly', () => {
    expect(screen.getByText('Type search query term in here:')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search your terms here.')).toBeInTheDocument()
  })
});
