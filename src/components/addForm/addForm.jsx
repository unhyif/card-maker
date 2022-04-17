import { memo } from "react";
import Button from "components/button/button";
import styles from "./addForm.module.css";

const AddForm = memo(({ addCard }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const card = {
      name: data.get("name"),
      company: data.get("company"),
      theme: data.get("theme"),
      title: data.get("title"),
      email: data.get("email"),
      message: data.get("message"),
      fileName: null,
      fileURL: null,
    };
    e.target.reset();
    addCard(card);
  };

  // const handleDelete = () => card

  return (
    <form action="post" className={styles.form} onSubmit={onSubmit}>
      <input className={styles.input} name="name" placeholder="Name" required />
      <input
        className={styles.input}
        name="company"
        placeholder="Company"
        required
      />
      <select className={styles.select} name="theme">
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
        <option value="light">Light</option>
      </select>

      <input
        className={styles.input}
        name="title"
        placeholder="Title"
        required
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="Email"
        required
      />

      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Message"
        required
      />

      <Button type="button" content="No file" />
      <Button content="Add" />
    </form>
  );
});

export default AddForm;
