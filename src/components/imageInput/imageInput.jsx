import { memo } from "react";
import { spinner } from "icons/spinner";
import styles from "./imageInput.module.css";

const ImageInput = memo(
  ({ hasImage, content, isLoading, handleFile, id = "new" }) => {
    const onChange = (e) => handleFile(e.target.files[0]);
    const bg = hasImage ? "pink" : "gray";

    return (
      <>
        {isLoading && (
          <div className={`${styles.loading} ${styles[bg]}`}>{spinner}</div>
        )}

        {/* TODO: trick */}
        {!isLoading && (
          <label htmlFor={id} className={`${styles.label} ${styles[bg]}`}>
            {content}
          </label>
        )}
        <input
          type="file"
          accept="image/*"
          id={id}
          className={styles.input}
          name="image"
          onChange={onChange}
          required
        />
      </>
    );
  }
);

export default ImageInput;
