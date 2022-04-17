import { memo, useRef, useState } from "react";
import ImageInput from "components/imageInput/imageInput";
import Button from "components/button/button";
import styles from "./addForm.module.css";

const NO_FILE = "No file";

const AddForm = memo(({ addCard, imageService }) => {
  const [hasImage, setHasImage] = useState(false);
  const [imageName, setImageName] = useState(NO_FILE);

  const onImageSelect = (e) => {
    const imgFile = e.target.files[0];
    const fileName = imgFile.name.slice(0, imgFile.name.indexOf("."));
    setHasImage(true);
    setImageName(fileName);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const imgFile = data.get("image");
      const newCard = {
        id: Date.now(),
        name: data.get("name"),
        company: data.get("company"),
        theme: data.get("theme"),
        title: data.get("title"),
        email: data.get("email"),
        message: data.get("message"),
        fileName: imgFile.name.slice(0, imgFile.name.indexOf(".")),
        fileURL: await imageService.upload(imgFile),
      };

      e.target.reset();
      setHasImage(false);
      setImageName(NO_FILE);
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
        hasImage={hasImage}
        content={imageName}
        onChange={onImageSelect}
      />
      <Button content="Add" />
    </form>
  );
});

export default AddForm;
