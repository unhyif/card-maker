import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "components/header/header";
import Main from "components/main/main";
import Footer from "components/footer/footer";

const Home = ({ authService }) => {
  const {
    state: { id },
  } = useLocation(); // location 정보

  const navigate = useNavigate();
  useEffect(() => {
    authService.onAuthChange((user) => user || navigate("/login"));
  }, []);

  const onLogout = useCallback(async () => {
    try {
      const result = await authService.logout();
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <>
      <Header logout={onLogout} size="big" />
      <Main id={id} />
      <Footer />
    </>
  );
};

export default Home;
