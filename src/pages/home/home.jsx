import { useLocation } from "react-router-dom";
import Maker from "components/maker/maker";
import Preview from "components/preview/preview";
import styles from "./home.module.css";

const Home = ({ cards, setCards }) => {
  const { state } = useLocation(); // location 정보
  const id = state ? state.id : null;

  return (
    <main className={styles.home}>
      <Maker cards={cards} setCards={setCards} />
      <Preview cards={cards} />
    </main>
  );
};

export default Home;
