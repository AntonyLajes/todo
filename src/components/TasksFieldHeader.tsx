import { TaskInfo } from '../interfaces/TaskInfo'
import styles from './TasksFieldHeader.module.css'

export function TasksFieldHeader({tasks}: {tasks: Array<TaskInfo>}){
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <span>Tarefas criadas</span>
                    <span>{tasks.length}</span>
                </div>
                <div>
                    <span>Concluídas</span>
                    <span>{tasks.filter(task => task.isDone).length} de {tasks.length}</span>
                </div>
            </div>
        </div>
    )
}