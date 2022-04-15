import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "components/login/login";
// import Header from "components/header/header";
// import Main from "components/main/main";
// import Footer from "components/footer/footer";
import styles from "app.module.css";
import Home from "page/home";

function App({ authService }) {
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
    // user ? navigate("/") : navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home authService={authService} />} />
      <Route
        path="/login"
        element={
          <div className={styles.background}>
            <Login login={authService.login} />
          </div>
        }
      />
    </Routes>
  );

  // return (
  //     {user ? (
  //       <>
  //         <Header logout={authService.logout} setUser={setUser} size="big" />
  //         <Main user={user} />
  //         <Footer />
  //       </>
  //     ) : (
  //       <div className={styles.background}>
  //         <Login login={authService.login} setUser={setUser} />
  //       </div>
  //     )}
  // );
}

export default App;
