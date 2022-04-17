import { memo } from "react";
import styles from "./card.module.css";

// function getClassName(theme) {
//   switch (theme) {
//     case "dark":
//       return styles.dark;
//     case "colorful":
//       return styles.colorful;
//     case "light":
//       return styles.light;
//     default:
//       throw new Error("Unknown theme");
//   }
// }

const DEFAULT_IMAGE = "/images/default_logo.png";

const Card = memo(
  ({ card: { name, company, theme, title, email, message, fileURL } }) => (
    <article className={`${styles.card} ${styles[theme]}`}>
      <img
        className={styles.avatar}
        src={fileURL || DEFAULT_IMAGE}
        alt={name}
      />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </article>
  )
);

export default Card;
