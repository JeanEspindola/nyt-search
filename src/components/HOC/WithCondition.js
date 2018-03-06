import React from 'react';

const isEmpty = prop => (
  prop === null || prop === undefined || prop.length === 0
);

const WithCondition = list => Component => props => (
  isEmpty(props[list])
    ? <p>There are no results to display.</p>
    : <Component {...props} />
);

export default WithCondition;
