import { useCallback } from "react";
import Button from "components/button/button";
import styles from "./form.module.css";

const Form = ({ card, handleDelete, newMaker }) => {
  const { name, company, theme, title, email, message, fileName } = card;
  const onDelete = useCallback(() => card);

  return (
    <form className={`${styles.form} ${newMaker && "new"}`}>
      <input
        className={styles.input}
        name="name"
        defaultValue={name}
        placeholder="Name"
      />
      <input
        className={styles.input}
        name="company"
        defaultValue={company}
        placeholder="Company"
      />
      <select className={styles.select} name="theme" value={theme}>
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
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        defaultValue={email}
        placeholder="Email"
      />

      <textarea
        className={styles.textarea}
        name="message"
        defaultValue={message}
        placeholder="Message"
      />

      <Button content={fileName} />
      <Button content="Delete" onClick={onDelete} />
    </form>
  );
};

export default Form;
