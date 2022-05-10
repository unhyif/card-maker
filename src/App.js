import { Routes, Route, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import Layout from "components/layout/layout";
import Home from "pages/home/home";
import Login from "components/login/login";
import styles from "app.module.css";

function App({ authService, dbService, AddCardForm, EditCardForm }) {
  const [cards, setCards] = useState({}); // REVIEW: Home에서 관리하기
  const id = useRef(null);
  const updateCount = useRef(0);

  // console.log(window.location.href); // REVIEW: navigate 할 때마다 App 실행됨 but state는 초기화되지 않음
  const navigate = useNavigate();
  // ComponentDidMount
  useEffect(() => {
    authService.onAuthChange((user) => {
      // TODO: 로그인 된 상태에서 새로고침 했을 때 navigate 안 쓰고 location 정보 갖는 방법?
      if (user) {
        const uid = user.uid;
        id.current = uid;
        navigate("/", { state: { id: uid } });

        dbService
          .load(uid)
          .then((cards) => setCards(cards))
          .catch((e) => console.error(e));
        updateCount.current = 1;
      } else {
        navigate("/login");
        // user || navigate("/login")
      }
    });
  }, []);
  // REVIEW: 글로벌하게 감시함

  // When a card was added or edited
  useEffect(() => {
    updateCount.current > 1 && dbService.update(id.current, cards);
    return undefined;
  }, [cards]);

  const addOrUpdateCard = useCallback((card) => {
    setCards((cards) => ({ ...cards, [card.id]: card }));
    updateCount.current += 1;
  }, []);

  const deleteCard = useCallback((key) => {
    setCards((cards) => {
      const updatedCards = { ...cards };
      delete updatedCards[key];
      return updatedCards;
    });
    updateCount.current += 1;
  }, []);

  return (
    <Routes>
      <Route element={<Layout authService={authService} />}>
        <Route
          path="/"
          element={
            <Home
              cards={cards}
              addOrUpdateCard={addOrUpdateCard}
              deleteCard={deleteCard}
              AddCardForm={AddCardForm}
              EditCardForm={EditCardForm}
            />
          }
        />
        {/* 마운트 될 때 location 정보 없이 Home이 일단 렌더링 됨 */}
      </Route>

      <Route
        path="/login"
        element={
          <main className={styles['login-main']}>
            <Login authService={authService} />
          </main>
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
