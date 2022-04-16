import { useLocation } from "react-router-dom";
import Section from "components/section/section";
import styles from "./home.module.css";

const Home = ({ authService }) => {
  const { state } = useLocation(); // location 정보
  const id = state ? state.id : null;

  return (
    <main>
      <Section title="Card Maker" />
      <Section title="Card Preview" />
    </main>
  );
};

export default Home;
