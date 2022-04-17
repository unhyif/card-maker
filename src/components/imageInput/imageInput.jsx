import { memo, useCallback } from "react";
import styles from "./imageInput.module.css";

function getFileName(file) {
  return file.name.slice(0, file.name.indexOf("."));
}

const ImageInput = memo(({ hasImage, content, handleFile, id = "new" }) => {
  const onChange = (e) => {
    const file = e.target.files[0];
    handleFile(getFileName(file), file);
  };

  const bg = hasImage ? "pink" : "gray";

  return (
    <>
      <label htmlFor={id} className={`${styles.label} ${styles[bg]}`}>
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
