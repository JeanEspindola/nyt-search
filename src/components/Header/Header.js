/*
* Header Presentation Component
*
* Displays the header top bar.
*
* */
import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import WithLocale from '../HOC/WithLocale';
import './Header.css';

const Header = ({ locale }) => (
  <Row className="Header">
    <div className="Header__Title">
      {locale.header_title}
    </div>
  </Row>
);

Header.propTypes = {
  locale: PropTypes.object,
};

export default WithLocale(Header);
