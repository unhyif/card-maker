import { useLocation } from "react-router-dom";
import Header from "components/header/header";
import Main from "components/main/main";
import Footer from "components/footer/footer";

const Home = ({ authService }) => {
  const {
    state: { id },
  } = useLocation(); // location 정보

  return (
    <>
      <Header logout={authService.logout} size="big" />
      <Main id={id} />
      <Footer />
    </>
  );
};

export default Home;
