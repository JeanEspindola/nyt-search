import PageNavigation from './PageNavigation';
import { WrappedRender } from '../../test/testUtils'
import { screen } from '@testing-library/react'

describe('PageNavigation', () => {
   it('renders PageNavigation without crashing', () => {
     WrappedRender(<PageNavigation />)

     expect(screen.getByText('Previous Page')).toBeInTheDocument()
     expect(screen.getByText('Next Page')).toBeInTheDocument()
  });
});
