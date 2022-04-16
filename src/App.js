import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "components/login/login";
import styles from "app.module.css";
import Home from "page/home";

function App({ authService }) {
  const navigate = useNavigate();
  useEffect(() => {
    authService.onAuthChange((user) =>
      user ? navigate("/", { state: { id: user.uid } }) : navigate("/login")
    );
  }, []); // TODO: 로그인 된 상태에서 새로고침 했을 때 navigate 안 쓰고 location 정보 갖는 방법?

  return (
    <Routes>
      <Route path="/" element={<Home authService={authService} />} />
      {/* 마운트 될 때 location 정보 없이 Home이 렌더링 됨 */}
      <Route
        path="/login"
        element={
          <div className={styles.background}>
            <Login authService={authService} />
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
