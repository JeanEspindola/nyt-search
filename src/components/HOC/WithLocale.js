import React, { Component } from 'react';
import PropTypes from 'prop-types';

const WithLocale = WrappedComponent =>
  class WithLocaleHOC extends Component {
    static contextTypes = {
      locale: PropTypes.object,
    };

    render() {
      const { locale } = this.context;
      return <WrappedComponent {...this.props} locale={locale} />;
    }
  };

export default WithLocale;
