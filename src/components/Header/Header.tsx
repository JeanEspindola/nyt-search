import { Row } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import styles from './Header.module.scss'

const Header = () => (
  <Row className={styles.header}>
    <div className={styles.title}>
      <FormattedMessage id="headerTitle" />
    </div>
  </Row>
)

export default Header
