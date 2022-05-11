import { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onLogout, onReset, size }) => (
  <header className={styles[size]}>
    {onLogout && (
      <div className={styles.btns}>
        <button className={styles.reset} onClick={onReset}>
          Reset
        </button>
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      </div>
    )}
    <img src="/images/logo.png" alt="logo" className={styles.logo} />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
));

export default Header;
