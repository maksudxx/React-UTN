import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <header className={styles.container}>
      <h2 className={styles.title}>PRACTICA 1</h2>
      <ul className={styles.containerLink}>
        <li className={styles.li}>
          <a className={styles.link} href="">Punto 1</a>
        </li>
        <li className={styles.li}>
          <a className={styles.link} href="#form">Punto 2</a>
        </li>
        <li className={styles.li}>
          <a className={styles.link} href="#info">Punto 3</a>
        </li>
        <li className={styles.li}>
          <a  className={styles.link} href="#counter">Punto 4</a>
        </li >
      </ul>
    </header>
  );
};
