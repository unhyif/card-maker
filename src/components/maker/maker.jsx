import EditForm from "components/editForm/editForm";
import AddForm from "components/addForm/addForm";
import styles from "./maker.module.css";

const Maker = ({ cards, deleteCard, addCard }) => (
  <section className={styles.maker}>
    <h2 className={styles.title}>Card maker</h2>
    <section className={styles.forms}>
      {cards.map((card) => (
        <EditForm key={card.id} card={card} deleteCard={deleteCard} />
      ))}
      <AddForm addCard={addCard} />
    </section>
  </section>
);

export default Maker;
