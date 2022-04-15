import { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ logout, size }) => {
  return (
    <header className={styles[size]}>
      {logout && (
        <button className={styles.logout} onClick={logout}>
          Logout
        </button>
      )}
      <img src="/images/logo.png" alt="logo" className={styles.logo} />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
});

export default Header;
