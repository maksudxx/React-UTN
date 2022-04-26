import styles from "./Navbar.module.css";
export const Navbar = () => {
  const helloWorld = ()=>{
    alert("Hello World!");
  }
  return (
    <header className={styles.container}>
      <h2 className={styles.title}>PRACTICA 1</h2>
      <ul className={styles.containerLink}>
        <li className={styles.li}>
          <p className={styles.link} onClick={helloWorld}>Hello World!</p>
        </li>
        <li className={styles.li}>
          <a className={styles.link} href="#form">Form</a>
        </li>
        <li className={styles.li}>
          <a className={styles.link} href="#info">Information</a>
        </li>
        <li className={styles.li}>
          <a  className={styles.link} href="#counter">Counter</a>
        </li >
      </ul>
    </header>
  );
};
