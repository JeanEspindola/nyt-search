/*
* Header Presentation Component
*
* Displays the header top bar.
*
* */
import { Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl'
import './Header.css';

const Header = () => (
  <Row className="Header">
    <div className="Header__Title">
      <FormattedMessage id="headerTitle"/>
    </div>
  </Row>
);

export default Header;
