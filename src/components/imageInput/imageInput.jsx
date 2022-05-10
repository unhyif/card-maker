import { memo } from "react";
import { spinner } from "icons/spinner";
import styles from "./imageInput.module.css";

const ImageInput = memo(({ content, isLoading, handleFile, id = "new" }) => {
  const onChange = (e) => handleFile(e.target.files[0]);
  const bg = content ? "pink" : "gray";

  return (
    <>
      {/* TODO: make spinner */}
      {isLoading && (
        <div className={`${styles.loading} ${styles[bg]}`}>{spinner}</div>
      )}

      {/* TODO: trick, delete image */}
      {!isLoading && (
        <label htmlFor={id} className={`${styles.label} ${styles[bg]}`}>
          {content || "No Image"}
        </label>
      )}
      <input
        type="file"
        accept="image/*"
        id={id}
        className={styles.input}
        name="image"
        onChange={onChange}
      />
    </>
  );
});

export default ImageInput;
