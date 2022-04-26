import { ButtonBack } from "../buttonBack/ButtonBack";
import styles from "./Info.module.css";


export const Info = () => {
  return (
    <div id="info" className={styles.container}>
      <h1 className={styles.title}>BENEFICIOS DE ENTRENAR CON PESAS</h1>
      <h4 className={styles.subtitle}>25 Abr, 2022 | TIPS-CONSEJOS </h4>
      <img
        src="https://petitfitbycris.com/wp-content/uploads/2020/04/entrenar-con-pesas-665x393.jpg"
        alt="pesas"
        className={styles.image}
      />
      <p className={styles.pagraph}>
        El ejercicio físico aporta numeroso beneficios para la salud de las
        personas y el entrenamiento con pesas por lo tanto también. Pero suele
        asociarse solamente a personas que buscan mejorar si estética corporal.
      </p>
      <p className={styles.pagraph}>
        Pero tiene muchos beneficios fuera de la estética. Para realizar el
        entrenamiento con pesas y aprovechar sus beneficios necesitamos conocer
        la técnica de cada ejercicio correctamente, si no realizamos una
        correcta ejecución de los movimiento podremos llegar a lesionarnos.
      </p>
      <ButtonBack />
      <br /> <br />
    </div>
  );
};
