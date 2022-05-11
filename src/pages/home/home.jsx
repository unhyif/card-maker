import Maker from "components/maker/maker";
import Preview from "components/preview/preview";
import styles from "./home.module.css";

const Home = ({
  cards,
  addOrUpdateCard,
  deleteCard,
  AddCardForm,
  EditCardForm,
}) => {
  // const { state } = useLocation(); // location 정보
  // const id = state ? state.id : null;

  return (
    <main className={styles.home}>
      <Maker
        cards={cards}
        addOrUpdateCard={addOrUpdateCard}
        deleteCard={deleteCard}
        AddCardForm={AddCardForm}
        EditCardForm={EditCardForm}
      />
      <Preview cards={cards} />
    </main>
  );
};

export default Home;
