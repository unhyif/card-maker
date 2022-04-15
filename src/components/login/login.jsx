import { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";

const Login = memo(({ login }) => {
  const navigate = useNavigate();
  const errorRef = useRef();

  const onLogin = async (providerName) => {
    try {
      const id = await login(providerName);
      navigate("/", { state: { id: id } });
    } catch (e) {
      errorRef.current.innerText = e.message;
      errorRef.current.style.display = "block";
    }
  };

  return (
    <div className={styles.wrapper}>
      <Header size="small" />
      <main className={styles.main}>
        <h2 className={styles.title}>Login</h2>
        <p ref={errorRef} className={styles.error}></p>
        <ul className={styles.services}>
          <li className={styles.service}>
            <button className={styles.google} onClick={() => onLogin("google")}>
              Google
            </button>
          </li>
          <li className={styles.service}>
            <button className={styles.github} onClick={() => onLogin("github")}>
              GitHub
            </button>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
});

export default Login;
