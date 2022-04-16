import Card from "components/card/card";
import styles from "./preview.module.css";

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h2 className={styles.title}>Card Preview</h2>
    <section className={styles.cards}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  </section>
);

export default Preview;
