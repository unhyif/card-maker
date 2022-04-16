import Form from "components/form/form";
import styles from "./maker.module.css";

const Maker = ({ cards }) => (
  <section className={styles.maker}>
    <h2 className={styles.title}>Card maker</h2>
    <section className={styles.forms}>
      {cards.map((card) => (
        <Form key={card.id} card={card} />
      ))}
      <Form key={Date.now()} card={{}} />
    </section>
  </section>
);

export default Maker;
