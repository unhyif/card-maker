import { memo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

const Header = memo(({ logout, size }) => {
  const navigate = useNavigate();
  const onLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      console.error(e);
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
