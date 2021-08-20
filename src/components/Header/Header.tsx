import { FormattedMessage } from 'react-intl'
import { LanguageDropdownSelector } from '../../config/Language'
import styles from './Header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <div className={styles.title}>
      <FormattedMessage id="headerTitle" />
    </div>
    <LanguageDropdownSelector />
  </div>
)

export default Header
