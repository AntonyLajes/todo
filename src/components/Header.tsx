import Rocket from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header(){
    return (
        <div className={styles.container}>
            <img src={Rocket} alt="Todo logo." />
            <div className={styles.name}>
                <span>to</span>
                <span>do</span>
            </div>
        </div>
    )
}