import { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ logout, setUser, size }) => {
  const onLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (e) {
      console.error(e); // TODO: modal
    }
  };

  return (
    <header className={styles[size]}>
      {logout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img src="/images/logo.png" alt="logo" className={styles.logo} />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
});

export default Header;
