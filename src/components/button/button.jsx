import { memo } from "react";
import styles from "./button.module.css";

const Button = memo(({ type, content, onClick }) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {content}
  </button>
));

export default Button;
