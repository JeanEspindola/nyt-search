import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WithLocale from '../HOC/WithLocale';

const NoArticle = ({ locale }) => (
  <Fragment>
    <p>{locale.no_details}</p>
  </Fragment>
);

NoArticle.propTypes = {
  locale: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default WithLocale(NoArticle);
