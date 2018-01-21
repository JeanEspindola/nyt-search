import { connect } from 'react-redux';
import { loadSearchResults } from '../../actions/articleSearchAction';
import PageNavigation from './PageNavigation';

const mapStateToProps = state => ({
  page: state.articleList.page,
  query: state.articleList.query,
});

const mapDispatchToProps = dispatch => ({
  onQuerySearch: (query, page) => dispatch(loadSearchResults(query, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageNavigation);
