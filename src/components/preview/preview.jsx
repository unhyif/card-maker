import Card from "components/card/card";
import styles from "./preview.module.css";

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h2 className={styles.title}>Card Preview</h2>
    <section className={styles.cards}>
      {Object.keys(cards).map((key) => (
        <Card key={key} id={key} card={cards[key]} />
      ))}
    </section>
  </section>
);

export default Preview;
