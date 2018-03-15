import React from 'react';

const WithCondition = (condition, render) => Component => props => (
  condition(props)
    ? render
    : <Component {...props} />
);

export default WithCondition;
