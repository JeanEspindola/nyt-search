import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WithLocale from '../HOC/WithLocale';

const EmptyList = ({ locale }) => (
  <Fragment>
    <p>{locale.no_results}</p>
  </Fragment>
);

EmptyList.propTypes = {
  locale: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default WithLocale(EmptyList);
