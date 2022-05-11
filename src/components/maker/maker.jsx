import styles from "./maker.module.css";

const Maker = ({
  cards,
  addOrUpdateCard,
  deleteCard,
  AddCardForm,
  EditCardForm,
}) => (
  <section className={styles.maker}>
    <h2 className={styles.title}>Card Maker</h2>
    <section className={styles.forms}>
      <AddCardForm addCard={addOrUpdateCard} />
      {Object.keys(cards).map((key) => (
        <EditCardForm
          key={key}
          card={cards[key]}
          updateCard={addOrUpdateCard}
          deleteCard={deleteCard}
        />
      ))}
    </section>
  </section>
);

export default Maker;
