import styles from "./imageInput.module.css";

const ImageInput = ({ use, content, onClick, id = "new" }) => {
  const className = use === "add" ? "gray" : "pink";
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
        onClick={onClick}
        required
      />
    </>
  );
};

export default ImageInput;
