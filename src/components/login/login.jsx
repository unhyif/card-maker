import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";

const Login = ({ google, github, setUser }) => {
  const handleGoogle = async () => {
    const result = await google();
    setUser(typeof result !== "object" && result);
  };

  const handleGithub = async () => {
    const result = await github();
    setUser(typeof result !== "object" && result);
  };

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <Header size="small" />
        <div className={styles.main}>
          <h2 className={styles.title}>Login</h2>
          <button className={styles.google} onClick={handleGoogle}>
            Google
          </button>
          <button className={styles.github} onClick={handleGithub}>
            GitHub
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
