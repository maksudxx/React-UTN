import styles from "./Form.module.css";
export const Form = () => {
  return (
    <div id="form"className={styles.container}>
        <h1 className={styles.title}>FORM</h1>
      <div className={styles.formContainer}>
        <input type="text" placeholder="name..." className={styles.input} />
        <input type="text" placeholder="adress..." className={styles.input} />
        <input type="email" placeholder="email..." className={styles.input} />
        <input type="number" placeholder="phone..." className={styles.input} />
        <select name="genre" id="genre" className={`${styles.input} ${styles.select}`}>
          <option value="" className={styles.option}>Select a genre...</option>
          <option value="male" className={styles.option}>Male</option>
          <option value="female" className={styles.option}>Female</option>
        </select>
        <input type="submit" value="Submit" className={styles.button}/>
      </div>
      <br /><br /><br />
    </div>
  );
};
