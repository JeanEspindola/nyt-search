/*
* Header Presentation Component
*
* Displays the header top bar.
*
* */
import React from 'react';
import { Row } from 'react-bootstrap';
import './Header.css';

const Header = () => (
  <Row className="Header">
    <div className="Header__Title">
      {'"The New York Times"'} article search application
    </div>
  </Row>
);

export default Header;
