import {BsArrowUpSquareFill} from 'react-icons/bs'
import styles from './ButtonBack.module.css'
export const ButtonBack = () => {
  return (
    <div className={styles.container}>
        <a href="#navbar" className={styles.link}>Go to Navbar</a>
        <BsArrowUpSquareFill className={styles.arrow}/>
    </div>
  )
}
