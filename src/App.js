import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "components/layout/layout";
import Home from "components/home/home";
import Login from "components/login/login";
import styles from "app.module.css";

function App({ authService }) {
  // console.log(window.location.href); // REVIEW: navigate 할 때마다 App 실행됨
  const navigate = useNavigate();
  useEffect(() => {
    authService.onAuthChange(
      (user) =>
        user ? navigate("/", { state: { id: user.uid } }) : navigate("/login")
      // user || navigate("/login")
    );
  }, []); // TODO: 로그인 된 상태에서 새로고침 했을 때 navigate 안 쓰고 location 정보 갖는 방법?
  // REVIEW: 글로벌하게 감시함

  return (
    <Routes>
      <Route element={<Layout authService={authService} />}>
        <Route path="/" element={<Home />} />
        {/* 마운트 될 때 location 정보 없이 Home이 일단 렌더링 됨 */}
      </Route>

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
