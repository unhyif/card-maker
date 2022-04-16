import styles from "./button.module.css";

const Button = ({ type, content, onClick }) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {content}
  </button>
);

export default Button;
