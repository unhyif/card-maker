import { memo, useState } from "react";
import ImageInput from "components/imageInput/imageInput";
import Button from "components/button/button";
import { spinner } from "icons/spinner";
import styles from "./addForm.module.css";

function getContent(file, loading) {
  let content = file ? file.name.slice(0, file.name.indexOf(".")) : "No file";
  if (loading) {
    content = spinner;
  }
  return content;
}

const AddForm = memo(({ addCard, imageService }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const onImageAdd = (file) => {
    setFile(file);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);

      setLoading(true);
      const imgFile = formData.get("image");
      const { original_filename: fileName, secure_url: fileURL } =
        await imageService.upload(imgFile);
      const newCard = {
        id: Date.now(),
        name: formData.get("name"),
        company: formData.get("company"),
        theme: formData.get("theme"),
        title: formData.get("title"),
        email: formData.get("email"),
        message: formData.get("message"),
        fileName,
        fileURL,
      };

      e.target.reset();
      setFile(null);
      setLoading(false);
      addCard(newCard);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      action="post"
      encType="multipart/form-data"
      className={styles.form}
      onSubmit={onSubmit}
    >
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

      <ImageInput
        hasImage={file && true}
        content={getContent(file, loading)}
        handleFile={onImageAdd}
      />
      <Button content="Add" />
    </form>
  );
});

export default AddForm;
