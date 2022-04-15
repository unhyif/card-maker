import { useState } from "react";
import Login from "components/login/login";
import Header from "components/header/header";
import Main from "components/main/main";
import Footer from "components/footer/footer";
import styles from "app.module.css";

function App({ authService }) {
  const [user, setUser] = useState(null);

  return user ? (
    <>
      <Header logout={authService.logout} setUser={setUser} size="big" />
      <Main user={user} />
      <Footer />
    </>
  ) : (
    <div className={styles.background}>
      <Login login={authService.login} setUser={setUser} />
    </div>
  );
}

export default App;
