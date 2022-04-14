import styles from "./header.module.css";

const Header = ({ logout, setUser, size }) => {
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <header className={styles[size]}>
      {logout && (
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
