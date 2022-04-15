import styles from "./header.module.css";

const Header = ({ authService, setUser, size }) => {
  const handleLogout = async () => {
    try {
      await authService.logout();
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <header className={styles[size]}>
      {authService && (
        <button className={styles.logout} onClick={handleLogout}>
          logout
        </button>
      )}
      <img src="/images/logo.png" alt="logo" />
      <h1>Business Card Maker</h1>
    </header>
  );
};

export default Header;
