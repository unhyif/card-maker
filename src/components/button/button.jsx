import styles from "./button.module.css";

const Button = ({ content, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {content}
  </button>
);

export default Button;
