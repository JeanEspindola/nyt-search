/*
* Article List Container Component
*
* Connects the presentation component to redux.
* It dispaches the loadSearchResults action, used to make page navigation.
* It gets list, page and queried value from the store.
*
* */
import { connect } from 'react-redux';
import ArticleList from './ArticleList';

const mapStateToProps = state => ({
  list: state.articleList.list,
  loading: state.articleList.loading,
});

export default connect(mapStateToProps, null)(ArticleList);
