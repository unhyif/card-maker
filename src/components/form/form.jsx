import { useEffect } from "react";
import styles from "./form.module.css";

const Form = ({ card: { name, company, theme, title, email, message } }) => {
  //   useEffect(() => {
  //     document.querySelector(`option[data-value=${theme}]`).selected = true;
  //   }, []);

  return (
    <form>
      <div className={styles.first}>
        <input name="name" defaultValue={name} placeholder="Name" />
        <input name="company" defaultValue={company} placeholder="Company" />
        <select name="theme">
          <option data-value="Dark" defaultValue="Dark">
            Dark
          </option>
          <option data-value="Colorful" defaultValue="Colorful">
            Colorful
          </option>
          <option data-value="Light" defaultValue="Light">
            Light
          </option>
        </select>
      </div>
      <div className={styles.second}>
        <input name="title" defaultValue={title} placeholder="Title" />
        <input name="email" defaultValue={email} placeholder="Email" />
      </div>
      <div className={styles.third}>
        <input name="message" defaultValue={message} placeholder="Message" />
      </div>
      <div className={styles.btns}>
        <button>File</button>
        <button>Delete</button>
      </div>
    </form>
  );
};

export default Form;
