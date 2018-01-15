/*
* Article List Container Component
*
* Connects the presentation component to redux.
* It dispaches the loadSearchResults action, used to make page navigation.
* It gets list, page and queried value from the store.
*
* */
import { connect } from 'react-redux';
import { loadSearchResults } from '../../actions/articleSearchAction';
import ArticleList from './ArticleList';

const mapStateToProps = state => ({
  list: state.articleList.list,
  page: state.articleList.page,
  query: state.articleList.query,
});

const mapDispatchToProps = dispatch => ({
  onQuerySearch: (query, page) => dispatch(loadSearchResults(query, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
