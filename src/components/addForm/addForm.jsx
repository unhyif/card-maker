import { memo, useState } from "react";
import ImageInput from "components/imageInput/imageInput";
import Button from "components/button/button";
import styles from "./addForm.module.css";

const AddForm = memo(({ addCard, imageService }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const onImageAdd = (file) => {
    setFile(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const imgFile = formData.get("image");
    let fileName, fileURL;

    try {
      if (imgFile.size) {
        setLoading(true);
        const { original_filename, secure_url } = await imageService.upload(
          imgFile
        );
        fileName = original_filename;
        fileURL = secure_url;
      } else {
        fileName = null;
        fileURL = null;
      }

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
      addCard(newCard);
    } catch (e) {
      console.error(e);
    }
    setFile(null);
    imgFile.size && setLoading(false);
    e.target.reset();
  };

  return (
    <form
      action="post"
      encType="multipart/form-data"
      className={styles.form}
      onSubmit={onSubmit}
    >
      <input className={styles.input} name="name" placeholder="Name" required />
      <input className={styles.input} name="company" placeholder="Company" />
      <select className={styles.select} name="theme">
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
        <option value="light">Light</option>
      </select>

      <input className={styles.input} name="title" placeholder="Title" />
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="Email"
      />

      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Message"
      />

      <ImageInput
        content={file && file.name.slice(0, file.name.indexOf("."))}
        isLoading={loading}
        handleFile={onImageAdd}
      />
      <Button content="Add" />
    </form>
  );
});

export default AddForm;
