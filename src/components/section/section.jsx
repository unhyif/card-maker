import styles from "./section.module.css";

const Section = ({ title }) => (
  <section>
    <h2 className={styles.title}>{title}</h2>
  </section>
);

export default Section;
