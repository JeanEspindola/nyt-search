/*
* Article List Presentation Component
*
* Renders the list of returned actions, performs page navigation on results.
*
* */
import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageNavigation from '../Page-Navigation/PageNavigation';
import EmptyList from '../Screens/EmptyList';
import Loading from '../../components/Screens/Loading';
import { useSelector } from 'react-redux'
import { RootStateType } from '../../reducers/rootTypes'
import { FormattedMessage } from 'react-intl'

const ArticleList = () => {
  const {list, loading} = useSelector((state: RootStateType) => state.articleList)
  let component: React.ReactNode

  if (loading) {
    component = <Loading />
  } else if (list === null || list === undefined || list.length === 0) {
    component = <EmptyList />
  } else {
    component = (
      <>
        <h4>
          <FormattedMessage id={'results'}/>
        </h4>
        <ListGroup>
          {
            list.map(item => (
                <ListGroupItem key={item.id}>
                  <Link to={{pathname: '/detail', state: {article: item}}}>
                    {item.headline.main}
                  </Link>
                </ListGroupItem>
            ))
          }
        </ListGroup>
        <PageNavigation/>
      </>
    )
  }

  return (
    <React.Fragment>
      {component}
    </React.Fragment>
  );
}

export default ArticleList;
