import { useState } from "react";
import styles from "./Counter.module.css";
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>COUNTER</h1>
      <p className={styles.counter}>El valor del contador es: {count}</p>

      <button onClick={() => setCount(count - 1)} className={styles.button}>
        -
      </button>
      <button
        onClick={() => setCount(0)}
        className={`${styles.button} ${styles.buttonReset}`}
      >
        Reset
      </button>
      <button onClick={() => setCount(count + 1)} className={styles.button}>
        +
      </button>
    </div>
  );
};
