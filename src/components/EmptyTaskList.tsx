import { ClipboardText } from "@phosphor-icons/react"
import styles from './EmptyTaskList.module.css'

export function EmptyTaskList(){
    return (
        <div className={styles.centralizeContainer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <ClipboardText size={56} className={styles.image}/>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}