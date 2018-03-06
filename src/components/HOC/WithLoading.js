import React from 'react';
import './WithLoading.css';

const WithLoading = loading => Component => props => (
  props[loading]
    ? <div className="loader" />
    : <Component {...props} />
);

export default WithLoading;
