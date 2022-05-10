import { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onLogout, size }) => (
  <header className={styles[size]}>
    {
      onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )
      /* TODO: 초기화 */
    }
    <img src="/images/logo.png" alt="logo" className={styles.logo} />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
));

export default Header;
