import { memo, useCallback, useState } from "react";
import ImageInput from "components/imageInput/imageInput";
import Button from "components/button/button";
import styles from "./editForm.module.css";

const EditForm = memo(({ card, updateCard, deleteCard, imageService }) => {
  const [loading, setLoading] = useState(false);
  const { name, company, theme, title, email, message, fileName } = card;

  const onTextChange = (e) => {
    const updatedCard = { ...card, [e.target.name]: e.target.value };
    updateCard(updatedCard);
  };

  const onImageChange = async (file) => {
    setLoading(true);
    try {
      const { original_filename: fileName, secure_url: fileURL } =
        await imageService.upload(file);
      const updatedCard = {
        ...card,
        fileName,
        fileURL,
      };
      updateCard(updatedCard);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const onDelete = useCallback(() => deleteCard(card.id), []);

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        name="name"
        value={name}
        placeholder="Name"
        required
        onChange={onTextChange}
      />
      <input
        className={styles.input}
        name="company"
        value={company}
        placeholder="Company"
        onChange={onTextChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onTextChange}
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
        onChange={onTextChange}
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={onTextChange}
      />

      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        placeholder="Message"
        onChange={onTextChange}
      />

      <ImageInput
        content={fileName}
        isLoading={loading}
        id={card.id}
        handleFile={onImageChange}
      />
      <Button type="button" content="Delete" onClick={onDelete} />
    </form>
  );
});

export default EditForm;
