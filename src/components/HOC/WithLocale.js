import React from 'react';
import PropTypes from 'prop-types';

const WithLocale = (Component) => {
  const connectContext = (props, context) => (
    <Component {...props} locale={context.locale} />
  );

  connectContext.contextTypes = {
    locale: PropTypes.object,
  };

  return connectContext;
};

export default WithLocale;
