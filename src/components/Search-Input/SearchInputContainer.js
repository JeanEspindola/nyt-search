import { connect } from 'react-redux';
import { loadSearchResults } from '../../actions/articleSearchAction';
import SearchInput from './SearchInput';

const mapDispatchToProps = dispatch => ({
  onQuerySearch: (query, page) => dispatch(loadSearchResults(query, page)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
