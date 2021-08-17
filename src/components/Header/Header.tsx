import { Row } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import styles from './Header.module.scss'

const Header = () => (
  <Row className={styles.header}>
    <div className={styles.title}>
      <FormattedMessage id="headerTitle" />
      <img
        src="https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1583354208354"
        alt="https://developer.nytimes.com"
        className={styles.logo}
      />
    </div>
  </Row>
)

export default Header
