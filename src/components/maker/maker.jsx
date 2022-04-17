import EditForm from "components/editForm/editForm";
import AddForm from "components/addForm/addForm";
import styles from "./maker.module.css";

const Maker = ({ cards, updateCard, deleteCard, addCard }) => (
  <section className={styles.maker}>
    <h2 className={styles.title}>Card maker</h2>
    <section className={styles.forms}>
      {Object.keys(cards).map((key) => (
        <EditForm
          key={key}
          id={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <AddForm addCard={addCard} />
    </section>
  </section>
);

export default Maker;
