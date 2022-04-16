import { useEffect } from "react";
import styles from "./card.module.css";

const Card = ({ card: { name, company, theme, title, email, message } }) => (
  <article className={`${styles["card"]} ${styles[theme.toLowerCase()]}`}>
    <img src="/images/default_logo.png" alt={name} className={styles.photo} />
    <div className={styles.info}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.company}>{company}</p>
      <div className={styles.divider}></div>
      <p className={styles.title}>{title}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.message}>{message}</p>
    </div>
  </article>
);

export default Card;
