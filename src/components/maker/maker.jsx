import EditForm from "components/editForm/editForm";
import AddForm from "components/addForm/addForm";
import styles from "./maker.module.css";

const Maker = ({ cards, setCards }) => (
  <section className={styles.maker}>
    <h2 className={styles.title}>Card maker</h2>
    <section className={styles.forms}>
      {cards.map((card) => (
        <EditForm key={card.id} card={card} setCards={setCards} />
      ))}
      <AddForm setCards={setCards} />
    </section>
  </section>
);

export default Maker;
