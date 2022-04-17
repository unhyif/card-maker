import { memo } from "react";
import ImageInput from "components/imageInput/imageInput";
import Button from "components/button/button";
import styles from "./editForm.module.css";

const EditForm = memo(({ card, updateCard, deleteCard }) => {
  const { name, company, theme, title, email, message, fileName } = card;

  const onChange = (e) => {
    const updatedCard = { ...card, [e.target.name]: e.target.value };
    updateCard(updatedCard);
  };

  const onDelete = () => deleteCard(card.id);

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        name="name"
        value={name}
        placeholder="Name"
        required
        onChange={onChange}
      />
      <input
        className={styles.input}
        name="company"
        value={company}
        placeholder="Company"
        required
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
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
        value={title}
        placeholder="Title"
        required
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        required
        onChange={onChange}
      />

      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        placeholder="Message"
        required
        onChange={onChange}
      />

      <ImageInput use="update" content={fileName} id={card.id} />
      <Button type="button" content="Delete" onClick={onDelete} />
    </form>
  );
});

export default EditForm;
