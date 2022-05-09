import { memo, useEffect, useRef } from "react";
import styles from "./imageInput.module.css";

const ImageInput = memo(({ hasImage, content, handleFile, id = "new" }) => {
  const onChange = (e) => handleFile(e.target.files[0]);
  const bg = hasImage ? "pink" : "gray";
  const labelRef = useRef();
  useEffect(() => {
    labelRef.current.innerHTML = content;
  }, [content]);

  return (
    <>
      {/* TODO: trick */}
      <label
        ref={labelRef}
        htmlFor={id}
        className={`${styles.label} ${styles[bg]}`}
      ></label>
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
});

export default ImageInput;
