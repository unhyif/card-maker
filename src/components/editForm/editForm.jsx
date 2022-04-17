import { memo } from "react";
import Button from "components/button/button";
import styles from "./editForm.module.css";

const EditForm = memo(({ card, editCard, deleteCard }) => {
  const { name, company, theme, title, email, message, fileName } = card;

  const onChange = (e) => {
    const key = e.target.name;
    const newCard = { ...card };
    newCard[key] = e.target.value;
    editCard(card, newCard);
  };

  const onDelete = () => deleteCard(card);

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        name="name"
        defaultValue={name}
        placeholder="Name"
        required
        onChange={onChange}
      />
      <input
        className={styles.input}
        name="company"
        defaultValue={company}
        placeholder="Company"
        required
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        defaultValue={theme}
        onChange={onChange}
      >
        {/* REVIEW: default option */}
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
        <option value="light">Light</option>
      </select>

      <input
        className={styles.input}
        name="title"
        defaultValue={title}
        placeholder="Title"
        required
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        defaultValue={email}
        placeholder="Email"
        required
        onChange={onChange}
      />

      <textarea
        className={styles.textarea}
        name="message"
        defaultValue={message}
        placeholder="Message"
        required
        onChange={onChange}
      />

      <Button type="button" content={fileName} />
      <Button type="button" content="Delete" onClick={onDelete} />
    </form>
  );
});

export default EditForm;
