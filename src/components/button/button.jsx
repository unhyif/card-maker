import styles from "./button.module.css";

const Button = ({ content, onClick }) => (
  <button onClick={onClick}>{content}</button>
);

export default Button;
