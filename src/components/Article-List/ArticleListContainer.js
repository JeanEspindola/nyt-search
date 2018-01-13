import { connect } from 'react-redux';
import ArticleList from './ArticleList';

const mapStateToProps = state => ({
  list: state.articleList.list,
  page: state.articleList.page,
});

export default connect(mapStateToProps, null)(ArticleList);
