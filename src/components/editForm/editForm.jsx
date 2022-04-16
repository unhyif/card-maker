import { memo } from "react";
import Button from "components/button/button";
import styles from "./editForm.module.css";

const EditForm = memo(({ card, deleteCard }) => {
  const { name, company, theme, title, email, message, fileName } = card;
  const onDelete = () => deleteCard(card);

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        name="name"
        defaultValue={name}
        placeholder="Name"
        required
      />
      <input
        className={styles.input}
        name="company"
        defaultValue={company}
        placeholder="Company"
        required
      />
      <select className={styles.select} name="theme" defaultValue={theme}>
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
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        defaultValue={email}
        placeholder="Email"
        required
      />

      <textarea
        className={styles.textarea}
        name="message"
        defaultValue={message}
        placeholder="Message"
        required
      />

      <Button type="button" content={fileName} />
      <Button type="button" content="Delete" onClick={onDelete} />
    </form>
  );
});

export default EditForm;
