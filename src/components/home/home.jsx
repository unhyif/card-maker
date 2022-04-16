import { useLocation } from "react-router-dom";
import Maker from "pages/maker/maker";
import Preview from "pages/preview/preview";
import styles from "./home.module.css";

const Home = ({ cards }) => {
  const { state } = useLocation(); // location 정보
  const id = state ? state.id : null;

  return (
    <main className={styles.home}>
      <Maker cards={cards} />
      <Preview cards={cards} />
    </main>
  );
};

export default Home;
