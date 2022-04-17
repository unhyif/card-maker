import { memo } from "react";
import styles from "./imageInput.module.css";

function exit() {}

const ImageInput = memo(({ hasImage, content, onChange, id = "new" }) => {
  const className = hasImage ? "pink" : "gray";
  return (
    <>
      <label htmlFor={id} className={`${styles.label} ${styles[className]}`}>
        {content}
      </label>
      <input
        id={id}
        className={styles.input}
        type="file"
        name="image"
        onChange={onChange}
        required
      />
    </>
  );
});

export default ImageInput;
