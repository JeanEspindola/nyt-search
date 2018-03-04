import React, { Component } from 'react';
import './LoadingHOC.css';

const isEmpty = prop => (
  prop === null || prop === undefined || prop.length === 0
);

const LoaderHOC = (listProp, loadingIndicator) =>
  WrappedComponent => class LoadingHOC extends Component {
    render() {
      if (this.props[loadingIndicator]) return <div className="loader" />;

      return (isEmpty(this.props[listProp])) ? <p>There are no results to display.</p> :
      <WrappedComponent {...this.props} />;
    }
  };

export default LoaderHOC;
