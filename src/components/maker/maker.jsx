import EditForm from "components/editForm/editForm";
import AddForm from "components/addForm/addForm";
import styles from "./maker.module.css";

const Maker = ({ cards, addOrUpdateCard, deleteCard }) => (
  <section className={styles.maker}>
    <h2 className={styles.title}>Card maker</h2>
    <section className={styles.forms}>
      {Object.keys(cards).map((key) => (
        <EditForm
          key={key}
          card={cards[key]}
          updateCard={addOrUpdateCard}
          deleteCard={deleteCard}
        />
      ))}
      <AddForm addCard={addOrUpdateCard} />
    </section>
  </section>
);

export default Maker;
